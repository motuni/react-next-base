import React from 'react'
import { CalendarIcon } from 'components/foundations/Icon'
import { FCProps } from 'types/Props'
import css from './DatePickerWrapper.module.scss'

type DatePickerWrapperProps = {
    type?: string
} & FCProps

const DatePickerWrapper = ({ children, type = '' }: DatePickerWrapperProps) => {
    return (
        <div className={`${css.datePickerWrapper} ${css[type]}`}>
            {children}
            {type !== 'calendar' && (
                <div className={css.datePickerIcon}>
                    <CalendarIcon />
                </div>
            )}
        </div>
    )
}

export const DatePickerCalendar = ({ children }: FCProps) => {
    return <div className={css.datePickerCalendar}>{children}</div>
}

export default DatePickerWrapper
