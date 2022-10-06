import React from 'react'
import { FCProps } from 'types/Props'
import css from './Table.module.scss'

type TableProps = {
    type?: string
} & FCProps

const Table = ({ children, type = 'list' }: TableProps) => {
    return <table className={`${css.table} ${css[type]}`}>{children}</table>
}

type TRProps = {
    onClick?: () => void
}

export const TR = ({
    children,
    onClick,
    ...props
}: TRProps & React.HTMLProps<HTMLTableCellElement>) => {
    return (
        <tr
            className={onClick ? `${props.className} ${css.clickable}` : props.className}
            onClick={onClick}
        >
            {children}
        </tr>
    )
}

export default Table
