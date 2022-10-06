import React from 'react'
import { FCProps } from 'types/Props'
import css from './TimePickerWrapper.module.scss'

const TimePickerWrapper = ({ children }: FCProps) => {
    return <div className={css.timePickerWrapper}>{children}</div>
}

export default TimePickerWrapper
