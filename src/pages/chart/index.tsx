import React from 'react'
import { Stack, Box } from '@mui/material'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Wrapper } from 'components/layouts/Wrapper'
import BarOriginalChart from 'components/modules/chart/BarChart'
import DefaultLayout from 'components/templates/DefaultLayout'

const DoughnutChart = dynamic(import('components/modules/chart/DoughnutChart'), {
    ssr: false,
})
const RadarChart = dynamic(import('components/modules/chart/RadarChart'), {
    ssr: false,
})
const LineChart = dynamic(import('components/modules/chart/LineChart'), {
    ssr: false,
})

const ChartPage: NextPage = () => {
    const doughnutChartData = {
        labels: ['1', '2'],
        datasets: [
            {
                data: [10, 20],
                backgroundColor: ['#3c6469', '#ccc'],
                borderWidth: 0,
            },
        ],
    }

    const radarChartData = {
        labels: ['', '', '', '', ''],
        datasets: [
            {
                label: '今回',
                data: [1, 1, 1, 1, 1],
                backgroundColor: 'transparent',
                borderColor: '#e5354a',
                borderWidth: 2,
                pointRadius: 0,
            },
            {
                label: '前回',
                data: [3, 3, 3, 3, 3],
                backgroundColor: 'transparent',
                borderColor: '#f19aa6',
                borderWidth: 2,
                pointRadius: 0,
            },
            {
                label: '前々回',
                data: [5, 5, 5, 5, 5],
                backgroundColor: 'transparent',
                borderColor: '#c7c7c7',
                borderWidth: 2,
                pointRadius: 0,
            },
        ],
    }

    const lineChartData = {
        labels: ['2日', '3日', '4日', '5日', '6日', '7日', '8日'],
        datasets: [
            {
                label: '体重（kg）',
                data: [66.0, 67.0, 70.0, 66.0, 68.0, 69.0, 66.0],
                borderColor: '#e1765b',
                backgroundColor: '#e1765b',
                yAxisID: 'y1',
            },
            {
                label: '体脂肪率（%）',
                data: [22.0, 24.0, 22.4, 22.6, 23.0, 22.8, 23.0],
                borderColor: '#74ad77',
                backgroundColor: '#74ad77',
                yAxisID: 'y2',
            },
        ],
    }

    const barChartData = {
        datasets: [
            {
                label: 'データ1',
                total: [1575.4],
                ABC: [67.0, 43.8, 224.5],
            },
            {
                label: 'データ2',
                total: [1800],
                ABC: [76.5, 50.0, 256.5],
            },
            {
                label: 'データ3',
                total: [1470],
                ABC: [62.5, 40.8, 209.5],
            },
            {
                label: 'データ4',
                total: [2400],
                ABC: [102.0, 66.7, 342.0],
            },
            {
                label: 'データ5',
                total: [1200],
                ABC: [51.0, 33.3, 171.0],
            },
            {
                label: 'データ6',
                total: [2800],
                ABC: [119.0, 77.8, 399.0],
            },
            {
                label: 'データ7',
                total: [0],
                ABC: [0, 0, 0],
            },
        ],
    }

    return (
        <>
            <DefaultLayout>
                <Wrapper>
                    <h2>Chart</h2>
                    <br />
                    <br />
                    <Stack margin="auto" width="600px" spacing="20px">
                        <Box>
                            <DoughnutChart data={doughnutChartData} />
                        </Box>
                        <Box>
                            <RadarChart data={radarChartData} />
                        </Box>
                        <Box>
                            <LineChart data={lineChartData} />
                        </Box>
                        <Box pt="40px">
                            <BarOriginalChart data={barChartData} targetLine={1800} max={2400} />
                        </Box>
                    </Stack>
                </Wrapper>
            </DefaultLayout>
        </>
    )
}

export default ChartPage
