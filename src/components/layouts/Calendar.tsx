import React, { forwardRef } from 'react'
import Link from 'next/link'
import { FCProps, LinkProps } from 'types/Props'
import css from './Calendar.module.scss'

const Calendar = ({ children }: FCProps) => {
    return <div className={css.calendar}>{children}</div>
}

export const CalendarNav = ({ children }: FCProps) => {
    return <div className={css.calendarNav}>{children}</div>
}

export const CalendarNavPrev = ({ children }: FCProps) => {
    return <div className={css.calendarNavPrev}>{children}</div>
}

export const CalendarNavNext = ({ children }: FCProps) => {
    return <div className={css.calendarNavNext}>{children}</div>
}

export const CalendarNavTitle = ({ children }: FCProps) => {
    return <div className={css.calendarNavTitle}>{children}</div>
}

export const CalendarNavInput = forwardRef<HTMLAnchorElement, LinkProps>(function calendarBtn(
    props,
    ref
) {
    return (
        <Link href={props.href}>
            <a ref={ref} className={css.calendarNavInput} onClick={props.onClick}>
                {props.children}
            </a>
        </Link>
    )
})

export const CalendarHeader = ({ children }: FCProps) => {
    return <div className={css.calendarHeader}>{children}</div>
}

export const CalendarBody = ({ children }: FCProps) => {
    return <div className={css.calendarBody}>{children}</div>
}

export const CalendarItemEvent = ({ children }: FCProps) => {
    return <div className={css.calendarItemEvent}>{children}</div>
}

export default Calendar
