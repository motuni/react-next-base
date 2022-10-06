import React, { useState, useMemo, useEffect } from 'react'
import { Stack, Box } from '@mui/material'
import { subYears, subMonths, subDays, addDays } from 'date-fns'
import ja from 'date-fns/locale/ja'
import moment, { Moment } from 'moment'
import type { NextPage } from 'next'
import TimePicker from 'rc-time-picker'
import DatePicker, { registerLocale } from 'react-datepicker'
import DatePickerWrapper, { DatePickerCalendar } from 'components/layouts/DatePickerWrapper'
import TimePickerWrapper from 'components/layouts/TimePickerWrapper'
import { Wrapper } from 'components/layouts/Wrapper'
import DefaultLayout from 'components/templates/DefaultLayout'
import 'react-datepicker/dist/react-datepicker.css'
import 'rc-time-picker/assets/index.css'
registerLocale('ja', ja)

const CalendarPage: NextPage = () => {
    const today = useMemo(() => new Date(), [])
    const [newday, setNewday] = useState(today)
    const [startday, setStartday] = useState(subMonths(today, 1))
    const [endday, setEndday] = useState(today)
    const [selectTime, setSelectTime] = useState('')

    const labelStyle = {
        width: '180px',
        fontSize: '1.6rem',
        textAlign: 'left',
        lineHeight: '2.2rem',
    }
    const dataStyle = {
        width: '620px',
        fontSize: '1.6rem',
        textAlign: 'left',
        lineHeight: '2.2rem',
    }

    const onChangeTime = (time: Moment) => {
        if (time != null) {
            setSelectTime(time.format('HH:mm'))
        } else {
            setSelectTime('')
        }
    }

    const selections = 18
    const [selection, setSelection] = useState<boolean[]>([])
    useEffect(() => {
        // const selection = selections.length
        setSelection([...new Array(selections)].map(() => false))
    }, [selections])

    const onChangeSelection = (index: number) => {
        setSelection(selection.map((item, i) => (i === index ? !item : item)))
    }

    return (
        <>
            <DefaultLayout>
                <Wrapper>
                    <h2>Calendar</h2>
                    <br />
                    <br />
                    <Stack margin="auto" width="800px" spacing="40px">
                        <Stack direction="row" alignItems="center" spacing="10px">
                            <Box sx={labelStyle}>単体カレンダー</Box>
                            <Box sx={dataStyle}>
                                <Box width="290px">
                                    <DatePickerWrapper>
                                        <DatePicker
                                            dateFormat="y年M月d日（E）"
                                            dateFormatCalendar={'yyyy/MM'}
                                            className="datePickerInput"
                                            selected={newday}
                                            onChange={(date: Date) => setNewday(date)}
                                            calendarContainer={DatePickerCalendar}
                                            minDate={subYears(today, 5)}
                                            maxDate={today}
                                            showYearDropdown
                                            yearDropdownItemNumber={1}
                                            showMonthDropdown
                                            dropdownMode="select"
                                            locale="ja"
                                        />
                                    </DatePickerWrapper>
                                </Box>
                            </Box>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing="10px">
                            <Box sx={labelStyle}>期間（開始・終了）があるカレンダー</Box>
                            <Stack sx={dataStyle} direction="row" alignItems="center">
                                <Box width="290px">
                                    <DatePickerWrapper>
                                        <DatePicker
                                            dateFormat="y年M月d日（E）"
                                            dateFormatCalendar={'yyyy/MM'}
                                            className="datePickerInput"
                                            selected={startday}
                                            onChange={(date: Date) => setStartday(date)}
                                            calendarContainer={DatePickerCalendar}
                                            minDate={subYears(today, 5)}
                                            maxDate={subDays(endday, 1)}
                                            showYearDropdown
                                            yearDropdownItemNumber={1}
                                            showMonthDropdown
                                            dropdownMode="select"
                                            locale="ja"
                                        />
                                    </DatePickerWrapper>
                                </Box>
                                <Box width="20px">〜</Box>
                                <Box width="290px">
                                    <DatePickerWrapper>
                                        <DatePicker
                                            dateFormat="y年M月d日（E）"
                                            dateFormatCalendar={'yyyy/MM'}
                                            className="datePickerInput"
                                            selected={endday}
                                            onChange={(date: Date) => setEndday(date)}
                                            calendarContainer={DatePickerCalendar}
                                            minDate={addDays(startday, 1)}
                                            maxDate={today}
                                            showYearDropdown
                                            yearDropdownItemNumber={1}
                                            showMonthDropdown
                                            dropdownMode="select"
                                            locale="ja"
                                        />
                                    </DatePickerWrapper>
                                </Box>
                            </Stack>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing="10px">
                            <Box sx={labelStyle}>時間設定</Box>
                            <Stack sx={dataStyle} direction="row" alignItems="center">
                                <Box width="290px">
                                    <TimePickerWrapper>
                                        <TimePicker
                                            defaultValue={moment('09:00', 'h:mm a')}
                                            showSecond={false}
                                            onChange={onChangeTime}
                                            minuteStep={5}
                                        />
                                    </TimePickerWrapper>
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>
                </Wrapper>
            </DefaultLayout>
        </>
    )
}

export default CalendarPage
