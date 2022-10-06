import React from 'react'
import { FCProps } from 'types/Props'
import css from './Main.module.scss'

const Main = ({ children }: FCProps) => {
    return (
        <main className={css.main}>
            <div className={css.inner}>{children}</div>
        </main>
    )
}

export const SmartPhoneMain = ({ children }: FCProps) => {
    return (
        <main className={css.smartPhoneMain}>
            <div className={css.inner}>{children}</div>
        </main>
    )
}

export const SmartPhoneFull = ({ children }: FCProps) => {
    return <main className={css.smartPhoneMain}>{children}</main>
}

export default Main
