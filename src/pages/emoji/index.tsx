import React, { useState, useEffect, useRef } from 'react'
// import data from '@emoji-mart/data'
import data from '@emoji-mart/data/sets/13.1/native.json'
import Picker from '@emoji-mart/react'
import { Stack, Box } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import formCss from 'components/foundations/Form.module.scss'
import {
    Wrapper,
    WrapperColumn,
    WrapperColumnMain,
    WrapperColumnSide,
    WrapperColumnSideNav,
} from 'components/layouts/Wrapper'
import DefaultLayout from 'components/templates/DefaultLayout'

const EmojiPage: NextPage = () => {
    const router = useRouter()

    // サイドナビ固定
    const [isNavFixed, setNavFixed] = useState(false)
    const fixEl = useRef<HTMLDivElement>(null)

    const [input1Value, setInput1Value] = useState('')
    const [input2Value, setInput2Value] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null)
    const inputRef1 = useRef<HTMLInputElement | null>(null)
    const inputRef2 = useRef<HTMLInputElement | null>(null)

    // カーソルの開始・終了位置
    const [inputSelectionStart, setInputSelectionStart] = useState<number | null | undefined>(0)
    const [inputSelectionEnd, setInputSelectionEnd] = useState<number | null | undefined>(0)

    // フォーカスがある入力フィールドのカーソル位置取得
    const onSelectInput = (e: React.MouseEvent<HTMLInputElement>) => {
        const inputName = e.currentTarget.name
        if (inputName === 'input1') {
            inputRef.current = inputRef1.current
        } else if (inputName === 'input2') {
            inputRef.current = inputRef2.current
        }
        if (inputRef) {
            setInputSelectionStart(inputRef.current?.selectionStart)
            setInputSelectionEnd(inputRef.current?.selectionEnd)
        }
    }

    // 絵文字を選択
    /* eslint-disable */
    const onSelectEmoji = (e: any) => {
        const sym = e.unified.split('-')
        const codesArray: any[] = []
        sym.forEach((el: any) => codesArray.push('0x' + el))
        const emoji = String.fromCodePoint(...codesArray)
        /* eslint-enable */

        // 絵文字付きのvalue値をセット
        const inputName = inputRef?.current?.name
        console.log(inputName)
        if (inputSelectionStart != null && inputSelectionEnd != null) {
            if (inputName === 'input1') {
                setInput1Value(
                    input1Value.substring(0, inputSelectionStart) +
                        emoji +
                        input1Value.substring(inputSelectionEnd)
                )
            } else if (inputName === 'input2') {
                setInput2Value(
                    input2Value.substring(0, inputSelectionStart) +
                        emoji +
                        input2Value.substring(inputSelectionEnd)
                )
            }

            // カーソル位置を更新
            setInputSelectionStart(inputSelectionStart + emoji.length)
            setInputSelectionEnd(inputSelectionEnd + emoji.length)
        }
    }

    useEffect(() => {
        // スクロールでサイドナビ固定
        let offsetTop = fixEl.current?.getBoundingClientRect().top
        if (offsetTop) {
            offsetTop += window.pageYOffset
        }
        const onScroll = () => {
            if (offsetTop) {
                if (window.scrollY >= offsetTop) {
                    setNavFixed(true)
                } else {
                    setNavFixed(false)
                }
            }
        }
        window.addEventListener('scroll', onScroll, {
            capture: false,
            passive: true,
        })
        onScroll() // 初期描画時に一度だけ判定する

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    useEffect(() => {
        if (router.isReady) {
            inputRef.current = inputRef1.current
        }
    }, [router.isReady])

    return (
        <>
            <DefaultLayout>
                <Wrapper>
                    <WrapperColumn>
                        <WrapperColumnMain>
                            <Stack spacing="20px">
                                <Box width="100%">
                                    <input
                                        type="text"
                                        name="input1"
                                        className={formCss.formText}
                                        value={input1Value}
                                        ref={inputRef1}
                                        onSelect={onSelectInput}
                                        onChange={(e) => {
                                            setInput1Value(e.target.value)
                                        }}
                                    />
                                </Box>
                                <Box width="100%">
                                    <input
                                        type="text"
                                        name="input2"
                                        className={formCss.formText}
                                        value={input2Value}
                                        ref={inputRef2}
                                        onSelect={onSelectInput}
                                        onChange={(e) => {
                                            setInput2Value(e.target.value)
                                        }}
                                    />
                                </Box>
                            </Stack>
                        </WrapperColumnMain>
                        <WrapperColumnSide>
                            <div ref={fixEl} />
                            <WrapperColumnSideNav fixed={isNavFixed}>
                                <div className="sideNavTitle">絵文字は以下から選択してください</div>
                                <div className="sideNavEmoji">
                                    <Picker data={data} onEmojiSelect={onSelectEmoji} locale="ja" />
                                </div>
                            </WrapperColumnSideNav>
                        </WrapperColumnSide>
                    </WrapperColumn>
                </Wrapper>
            </DefaultLayout>
        </>
    )
}

export default EmojiPage
