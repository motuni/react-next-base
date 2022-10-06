import React from 'react'
import { TextLink } from 'components/foundations/Button'
import css from './Header.module.scss'

const Header = () => {
    return (
        <>
            <header className={css.header}>
                <div className={css.inner}>
                    <div className={css.headerLeft}>
                        <TextLink href="/login" color="primary">
                            戻る
                        </TextLink>
                    </div>
                    <h1 className={css.headerTitle}>ヘッダー</h1>
                    <div className={css.headerRight}>右</div>
                </div>
            </header>
        </>
    )
}

export default Header
