import React from 'react'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import css from './Chart.module.scss'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler)

type Props = {
    data: {
        labels: string[]
        datasets: {
            label: string
            data: number[]
            backgroundColor: string
            borderColor: string
            pointRadius?: number
        }[]
    }
}

// eslint-disable-next-line
const options: any = {
    scales: {
        r: {
            display: false,
            min: 0,
            max: 5,
            beginAtZero: true,
        },
    },
}

const RadarChart = ({ data }: Props) => {
    return (
        <>
            <div className={css.radarContainer}>
                <div className={css.radarContainerInner}>
                    <div className={css.chartLabel}>レーダーチャート</div>
                    <Radar data={data} options={options} />
                </div>
            </div>
        </>
    )
}

export default RadarChart
