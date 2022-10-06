import React from 'react'
import { FCProps } from 'types/Props'
import css from './Container.module.scss'

const Container = ({ children }: FCProps) => {
    return <div className={css.container}>{children}</div>
}

export default Container
