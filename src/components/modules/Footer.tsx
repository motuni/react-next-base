import React from 'react'
import css from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.inner}>&copy; copyright</div>
        </footer>
    )
}

export default Footer
