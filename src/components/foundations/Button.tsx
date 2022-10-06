import React from 'react'
import { CircularProgress } from '@mui/material'
import Link from 'next/link'
import { ButtonProps, LinkProps } from 'types/Props'
import css from './Button.module.scss'

type TextLinkProps = {
    bold?: boolean
    color?: string
    textDecoration?: boolean
} & LinkProps

export const TextLink = ({
    href,
    children,
    bold = false,
    color = 'base',
    textDecoration = true,
    onClick,
}: TextLinkProps) => {
    return (
        <Link href={href}>
            <a
                className={`${css.textLink} ${bold ? css.bold : ''} ${css[color]} ${
                    textDecoration ? css.textDecoration : ''
                }`}
                onClick={onClick}
            >
                {children}
            </a>
        </Link>
    )
}

type SimpleButtonProps = {
    addCss?: string[]
} & ButtonProps

export const SimpleButton = ({ children, addCss, ...props }: SimpleButtonProps) => {
    let addCssStr = ''
    if (addCss) {
        addCssStr = addCss.join(' ')
    }
    return (
        <button {...props} className={[css.simpleBtn, addCssStr].join(' ')}>
            {children}
        </button>
    )
}

type CommonButtonProps = {
    disabled?: boolean
    loading?: boolean
    size?: string
    active?: boolean
} & LinkProps

export const PrimaryButton = ({
    href,
    children,
    disabled = false,
    loading = false,
    size = 'md',
    onClick,
}: CommonButtonProps) => {
    return (
        <>
            {disabled ? (
                <div className={`${css.primaryBtn} ${css.disabled} ${css[size]}`}>{children}</div>
            ) : loading ? (
                <div className={`${css.primaryBtn} ${css[size]}`}>
                    <div className={css.loading}>
                        <CircularProgress color={'primary'} size="24px" />
                    </div>
                    {children}
                </div>
            ) : (
                <Link href={href}>
                    <a className={`${css.primaryBtn} ${css[size]}`} onClick={onClick}>
                        {children}
                    </a>
                </Link>
            )}
        </>
    )
}

export const SecondaryButton = ({
    href,
    children,
    disabled = false,
    size = 'md',
    active = false,
    onClick,
}: CommonButtonProps) => {
    return (
        <>
            {disabled ? (
                <div className={`${css.secondaryBtn} ${css.disabled} ${css[size]}`}>{children}</div>
            ) : (
                <Link href={href}>
                    <a
                        className={`${css.secondaryBtn} ${css[size]} ${active ? css.active : ''}`}
                        onClick={onClick}
                    >
                        {children}
                    </a>
                </Link>
            )}
        </>
    )
}

export const CancelButton = ({ href, children, disabled = false, onClick }: CommonButtonProps) => {
    return (
        <>
            {disabled ? (
                <div className={`${css.cancelBtn} ${css.disabled}`}>{children}</div>
            ) : (
                <Link href={href}>
                    <a className={css.cancelBtn} onClick={onClick}>
                        {children}
                    </a>
                </Link>
            )}
        </>
    )
}

type ChatNavButtonProps = {
    disabled?: boolean
} & LinkProps

export const ChatNavButton = ({
    href,
    children,
    onClick,
    disabled = false,
}: ChatNavButtonProps) => {
    return (
        <>
            {disabled ? (
                <div className={`${css.chatNavBtn} ${css.disabled}`}>{children}</div>
            ) : (
                <Link href={href}>
                    <a className={css.chatNavBtn} onClick={onClick}>
                        {children}
                    </a>
                </Link>
            )}
        </>
    )
}

export const FileNavButton = ({ href, children, onClick }: LinkProps) => {
    return (
        <Link href={href}>
            <a className={css.fileNavBtn} onClick={onClick}>
                {children}
            </a>
        </Link>
    )
}

type CalendarNavButtonProps = {
    disabled?: boolean
} & LinkProps

export const CalendarNavButton = ({
    href,
    children,
    disabled = false,
    onClick,
}: CalendarNavButtonProps) => {
    return (
        <>
            {disabled ? (
                <div className={`${css.calendarNavBtn} ${css.disabled}`}>{children}</div>
            ) : (
                <Link href={href}>
                    <a className={css.calendarNavBtn} onClick={onClick}>
                        {children}
                    </a>
                </Link>
            )}
        </>
    )
}

export const MapSearchButton = ({ children, ...props }: ButtonProps) => {
    return (
        <button {...props} className={css.mapSearchButton}>
            {children}
        </button>
    )
}

export const MapCurrentButton = ({ children, ...props }: ButtonProps) => {
    return (
        <button {...props} className={css.mapCurrentButton}>
            {children}
        </button>
    )
}
