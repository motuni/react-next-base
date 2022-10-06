import React, { useEffect, useState } from 'react'
import css from './Chart.module.scss'

type Props = {
    data: {
        datasets: {
            label: string
            total: number[]
            ABC: number[]
        }[]
    }
    targetLine?: number
    max: number
}

const BarOriginalChart = ({ data, targetLine = 0, max }: Props) => {
    const [targetLineLeft, setTargetLineLeft] = useState('')

    useEffect(() => {
        const per = Math.abs((targetLine / max) * 100)
        if (per >= 100) {
            setTargetLineLeft('calc(100% - 30px)')
        } else if (per >= 82) {
            setTargetLineLeft('calc(100% - 50px)')
        } else {
            setTargetLineLeft('calc(' + per + '% - 30px)')
        }
    }, [targetLine, max])

    return (
        <>
            <div className={css.barContainer}>
                <div className={css.chartLabel}>バーチャート</div>
                <ul className={css.chartLegend}>
                    <li className="a">A</li>
                    <li className="b">B</li>
                    <li className="c">C</li>
                </ul>
                <div className={css.chart}>
                    {data.datasets.map((item) => (
                        <div className={css.chartLine} key={item.label}>
                            <div className={css.chartLineLabel}>{item.label}</div>
                            <div className={css.chartLineData}>
                                <div className={css.chartLineDataTotal}>
                                    <div
                                        className={css.chartLineDataTotalBar}
                                        style={{
                                            width:
                                                (item.total[0] / max) * 100 >= 100
                                                    ? '100%'
                                                    : (item.total[0] / max) * 100 + '%',
                                        }}
                                    >
                                        {item.total[0] > 0 ? item.total[0] : ''}
                                    </div>
                                </div>
                                <div className={css.chartLineDataABC}>
                                    <div
                                        className={css.chartLineDataA}
                                        style={{
                                            width: ((item.ABC[0] * 4) / max) * 100 + '%',
                                        }}
                                    >
                                        <div className={css.chartLineDataABCText}>
                                            {item.ABC[0] > 0
                                                ? Math.ceil(
                                                      ((item.ABC[0] * 4) / item.total[0]) * 100
                                                  )
                                                : ''}
                                        </div>
                                    </div>
                                    <div
                                        className={css.chartLineDataB}
                                        style={{
                                            width: ((item.ABC[1] * 9) / max) * 100 + '%',
                                        }}
                                    >
                                        <div className={css.chartLineDataABCText}>
                                            {item.ABC[1] > 0
                                                ? Math.ceil(
                                                      ((item.ABC[1] * 9) / item.total[0]) * 100
                                                  )
                                                : ''}
                                        </div>
                                    </div>
                                    <div
                                        className={css.chartLineDataC}
                                        style={{
                                            // 残り%
                                            width:
                                                (item.total[0] / max) * 100 >= 100
                                                    ? '100%'
                                                    : (item.total[0] / max) * 100 -
                                                      ((item.ABC[0] * 4) / max) * 100 -
                                                      ((item.ABC[1] * 9) / max) * 100 +
                                                      '%',
                                        }}
                                    >
                                        <div className={css.chartLineDataABCText}>
                                            {/* 残り% */}
                                            {item.ABC[2] > 0
                                                ? 100 -
                                                  Math.ceil(
                                                      ((item.ABC[0] * 4) / item.total[0]) * 100
                                                  ) -
                                                  Math.ceil(
                                                      ((item.ABC[1] * 9) / item.total[0]) * 100
                                                  )
                                                : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {targetLine !== 0 && (
                        <div className={css.chartTarget}>
                            <div
                                className={css.chartTargetLine}
                                style={{
                                    left: targetLineLeft,
                                }}
                            >
                                <div className={css.chartTargetLineLabel}>{targetLine}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default BarOriginalChart
