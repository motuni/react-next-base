import React from 'react'
import { FCProps } from 'types/Props'
import css from './BottomNav.module.scss'

type BottomNavProps = {
    size?: string // md | sm
    pb?: string
} & FCProps

const BottomNav = ({ children, size = 'md', pb = '0' }: BottomNavProps) => {
    return <ul className={`${css.bottomNav} ${css[size]} ${css['pb' + pb]}`}>{children}</ul>
}

export default BottomNav
