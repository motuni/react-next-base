import React, { useState, useEffect, useRef } from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import css from './Chart.module.scss'

ChartJS.register(ArcElement)

type Props = {
    data: {
        labels: string[]
        datasets: {
            data: number[]
            backgroundColor: string[]
            borderColor?: string[]
            borderWidth: number
        }[]
    }
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

const DoughnutChart = ({ data }: Props) => {
    {
        /*
        半径 : r
        180度 : Math.PI
        360度 : Math.PI * 2
        ラジアン[rad] : 度[deg] * ( Math.PI / 180 )
        円周 : Math.PI * r * 2
        円周上のx位置 : Math.cos(rad) * r
        円周上のy位置 : Math.sin(rad) * r
        数学のxy座標を時計周りの座標に変換する : rad - Math.PI / 2 または (deg * Math.PI) / 180 - Math.PI / 2
        */
    }
    const doughnutRef = useRef<HTMLDivElement>(null)
    const [doughnutRefRadius, setDoughnutRefRadius] = useState(0)
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
    const [transform, setTransform] = useState('')
    const deg = Math.floor((data.datasets[0]['data'][0] / 30) * 100) * 0.01 * 360
    const rad = (deg * Math.PI) / 180 - Math.PI / 2

    useEffect(() => {
        const x = Math.cos(rad) * doughnutRefRadius
        const y = Math.sin(rad) * doughnutRefRadius
        setTransform(`translateX(${x - 16}px) translateY(${y - 16}px)`)
    }, [doughnutRefRadius, rad])

    useEffect(() => {
        if (doughnutRef.current) {
            const w = Number(JSON.stringify(doughnutRef.current.getBoundingClientRect().width))
            // 半径を求める、背景の円画像の線分引く
            setDoughnutRefRadius(w / 2 - 5)
        }
    }, [windowDimensions])

    useEffect(() => {
        setWindowDimensions(getWindowDimensions())
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }
        if (window != undefined) {
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <div className={css.doughnutContainer}>
                <div className={css.doughnutInner}>
                    <div ref={doughnutRef}>
                        <Doughnut
                            data={data}
                            options={{ cutout: '93%', animation: { duration: 0 } }}
                        />
                    </div>
                    <div
                        className={css.doughnutPoint}
                        style={{
                            transform,
                        }}
                    />
                </div>
                <div className={css.chartLabel}>
                    ドーナツ
                    <br />
                    チャート
                </div>
            </div>
        </>
    )
}

export default DoughnutChart
