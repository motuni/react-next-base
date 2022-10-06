import React, { useState } from 'react'
import { Stack, Box } from '@mui/material'
import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { PrimaryButton, SecondaryButton } from 'components/foundations/Button'
import BottomNav from 'components/layouts/BottomNav'
import { Wrapper } from 'components/layouts/Wrapper'
import DefaultLayout from 'components/templates/DefaultLayout'
import { RootState } from 'stores'
import { updateFontSize } from 'stores/fontSize'

const FontSizePage: NextPage = () => {
    const dispatch = useDispatch()
    const currentFontSize = useSelector((state: RootState) => state.font)
    const [selectedFontSize, setSelectedFontSize] = useState(currentFontSize.size)

    const onSelectFont = (size: 'sm' | 'md' | 'lg') => {
        setSelectedFontSize(size)
    }

    const onSubmit = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        dispatch(updateFontSize({ size: selectedFontSize }))
    }

    return (
        <>
            <DefaultLayout>
                <Wrapper>
                    <Stack margin="auto" mb="80px" width="800px" spacing="30px">
                        <Box>ご希望の文字サイズを選んでください。</Box>
                        <Stack direction="row" justifyContent="center" spacing="15px">
                            <Box>
                                <SecondaryButton
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        onSelectFont('sm')
                                    }}
                                    active={selectedFontSize === 'sm'}
                                >
                                    小
                                </SecondaryButton>
                            </Box>
                            <Box>
                                <SecondaryButton
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        onSelectFont('md')
                                    }}
                                    active={selectedFontSize === 'md'}
                                >
                                    中
                                </SecondaryButton>
                            </Box>
                            <Box>
                                <SecondaryButton
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        onSelectFont('lg')
                                    }}
                                    active={selectedFontSize === 'lg'}
                                >
                                    大
                                </SecondaryButton>
                            </Box>
                        </Stack>
                        <Stack
                            fontSize={
                                selectedFontSize === 'lg'
                                    ? '24px'
                                    : selectedFontSize === 'md'
                                    ? '20px'
                                    : '16px'
                            }
                            fontWeight="600"
                            textAlign="center"
                        >
                            フォントサイズ見本
                        </Stack>
                    </Stack>
                    <BottomNav>
                        <li>
                            <PrimaryButton href="#" onClick={onSubmit}>
                                決定
                            </PrimaryButton>
                        </li>
                    </BottomNav>
                </Wrapper>
            </DefaultLayout>
        </>
    )
}

export default FontSizePage
