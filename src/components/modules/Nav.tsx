import React from 'react'
import { TextLink } from 'components/foundations/Button'
import css from './Nav.module.scss'

const Nav = () => {
    return (
        <>
            <nav className={css.nav}>
                <ul className={css.navStep}>
                    <li>
                        <div className={css.navStepItem}>
                            <TextLink href="/blog" textDecoration={false}>
                                Blog
                            </TextLink>
                        </div>
                    </li>
                    <li>
                        <div className={css.navStepItem}>
                            <TextLink href="/users" textDecoration={false}>
                                Users
                            </TextLink>
                        </div>
                    </li>
                    <li>
                        <div className={css.navStepItem}>
                            <TextLink href="/editor" textDecoration={false}>
                                WYSIWYG
                            </TextLink>
                        </div>
                    </li>
                    <li>
                        <div className={css.navStepItem}>
                            <TextLink href="/emoji" textDecoration={false}>
                                Emoji
                            </TextLink>
                        </div>
                    </li>
                    <li>
                        <div className={css.navStepItem}>
                            <TextLink href="/chart" textDecoration={false}>
                                Chart
                            </TextLink>
                        </div>
                    </li>
                    <li>
                        <div className={css.navStepItem}>
                            <TextLink href="/calendar" textDecoration={false}>
                                Calendar
                            </TextLink>
                        </div>
                    </li>
                    <li>
                        <div className={css.navStepItem}>
                            <TextLink href="/fontSize" textDecoration={false}>
                                fontSize
                            </TextLink>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
