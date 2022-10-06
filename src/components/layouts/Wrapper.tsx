import React from 'react'
import { FCProps } from 'types/Props'
import css from './Wrapper.module.scss'

export const Wrapper = ({ children }: FCProps) => {
    return <div className={css.wrapper}>{children}</div>
}

export const WrapperHeader = ({ children }: FCProps) => {
    return <div className={css.wrapperHeader}>{children}</div>
}

export const WrapperBody = ({ children }: FCProps) => {
    return <div className={css.wrapperBody}>{children}</div>
}

export const WrapperColumn = ({ children }: FCProps) => {
    return <div className={css.wrapperColumn}>{children}</div>
}

export const WrapperColumnMain = ({ children }: FCProps) => {
    return <div className={css.wrapperColumnMain}>{children}</div>
}

export const WrapperColumnSide = ({ children }: FCProps) => {
    return <div className={css.wrapperColumnSide}>{children}</div>
}

type WrapperColumnSideNavProps = {
    fixed: boolean
} & FCProps

export const WrapperColumnSideNav = ({ children, fixed }: WrapperColumnSideNavProps) => {
    return <div className={`${css.wrapperColumnSideNav} ${fixed ? css.fixed : ''}`}>{children}</div>
}
