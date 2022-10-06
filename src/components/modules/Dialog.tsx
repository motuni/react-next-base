import React, { useState, useEffect } from 'react'
import { Dialog } from '@mui/material'
import { PrimaryButton, CancelButton } from 'components/foundations/Button'
import css from './Dialog.module.scss'

type DialogProps = {
    open?: boolean
    onClose?: () => void
    onReturn?: () => void
}

// 確認ダイアログ
type ConfirmProps = {
    message: string
}
export const ConfirmDialog = ({ message, open, onClose, onReturn }: ConfirmProps & DialogProps) => {
    const [openDialog, setOpenDialog] = useState(false)
    useEffect(() => {
        if (open != null) {
            setOpenDialog(open)
        }
    }, [open, setOpenDialog])

    return (
        <Dialog
            open={openDialog}
            onClose={() => {
                if (onClose != null) {
                    onClose()
                }
            }}
        >
            <div className={css.dialogMain}>
                <div className={css.dialogMainTitle}>{message}</div>
                <ul className={css.dialogMainNav}>
                    <li>
                        <CancelButton
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                if (onClose != null) {
                                    onClose()
                                }
                            }}
                        >
                            キャンセル
                        </CancelButton>
                    </li>
                    <li>
                        <PrimaryButton
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                if (onReturn != null) {
                                    onReturn()
                                }
                            }}
                        >
                            OK
                        </PrimaryButton>
                    </li>
                </ul>
            </div>
        </Dialog>
    )
}

// エラーダイアログ
type ErrorProps = {
    message: string
}
export const ErrorDialog = ({ message, open, onClose }: ErrorProps & DialogProps) => {
    const [openDialog, setOpenDialog] = useState(false)
    useEffect(() => {
        if (open != null) {
            setOpenDialog(open)
        }
    }, [open, setOpenDialog])

    return (
        <Dialog
            open={openDialog}
            onClose={() => {
                if (onClose != null) {
                    onClose()
                }
            }}
        >
            <div className={css.dialogMain}>
                <div className={css.dialogMainText}>{message}</div>
                <ul className={css.dialogMainNav}>
                    <li>
                        <PrimaryButton
                            href="#"
                            size="sm"
                            onClick={(e) => {
                                e.preventDefault()
                                if (onClose != null) {
                                    onClose()
                                }
                            }}
                        >
                            閉じる
                        </PrimaryButton>
                    </li>
                </ul>
            </div>
        </Dialog>
    )
}

// 規約ダイアログ
type TermsProps = {
    title: string
    children: React.ReactNode
}
export const TermsDialog = ({ title, children, open, onClose }: TermsProps & DialogProps) => {
    const [openDialog, setOpenDialog] = useState(false)
    useEffect(() => {
        if (open != null) {
            setOpenDialog(open)
        }
    }, [open, setOpenDialog])

    return (
        <div
            className={
                openDialog ? `${css.termsDialog}` + ' ' + `${css.fadeIn}` : `${css.termsDialog}`
            }
        >
            <div className={css.termsDialogMain}>
                <div className={css.termsDialogMainInner}>
                    <h1 className={css.termsDialogMainTitle}>{title}</h1>
                    <div className={css.termsDialogMainFrame}>{children}</div>
                    <ul className={css.termsDialogMainNav}>
                        <li>
                            <PrimaryButton
                                href="#"
                                size="sm"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (onClose != null) {
                                        onClose()
                                    }
                                }}
                            >
                                閉じる
                            </PrimaryButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
