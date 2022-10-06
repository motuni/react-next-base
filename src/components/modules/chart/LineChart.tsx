import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Line } from 'react-chartjs-2'
import css from './Chart.module.scss'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

type Props = {
    data: {
        labels: string[]
        datasets: {
            label: string
            data: number[]
            borderColor: string
            backgroundColor: string
            yAxisID: string
        }[]
    }
}

// eslint-disable-next-line
const options: any = {
    scales: {
        y1: {
            type: 'linear',
            display: true,
            position: 'left',
        },
        y2: {
            type: 'linear',
            display: true,
            position: 'right',
            gridLines: {
                drawOnArea: false,
            },
        },
    },
}

const LineChart = ({ data }: Props) => {
    return (
        <>
            <div className={css.lineContainer}>
                <div className={css.chartLabel}>ラインチャート</div>
                <div className={css.chartLegend}>
                    <div className={css.chartLegendLeft}>kg</div>
                    <ul className={css.chartLegendCenter}>
                        <li>体重（kg）</li>
                        <li>体脂肪率（%）</li>
                    </ul>
                    <div className={css.chartLegendRight}>%</div>
                </div>
                <Line data={data} options={options} />
            </div>
        </>
    )
}

export default LineChart
