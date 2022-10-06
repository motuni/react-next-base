import React, { useState, useEffect } from 'react'
import { Stack, Box } from '@mui/material'
import type { NextPage } from 'next'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import formCss from 'components/foundations/Form.module.scss'
import { Wrapper } from 'components/layouts/Wrapper'
import DefaultLayout from 'components/templates/DefaultLayout'

type FormData = {
    height: string
}

const InputPage: NextPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormData>()

    // 身長のチェック
    const [validatedHeight, setValidatedHeight] = useState('')
    const onChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value

        // 最初にドットか0
        if (val.slice(0, 1) === '.' || val.slice(0, 1) === '0') return

        // ドットを2回繰り返し
        if (val.slice(-2) === '..') return

        // ドットを2回目
        if ((val.match(/\./g) || []).length >= 2) return

        // 1桁＋ドット
        if (val.length === 2 && val.slice(-1) === '.') return

        // 3〜9始まりの2桁はドット付与
        // if (val.length === 2 && Number(val) >= 30) {
        //     val += '.'
        // } else if (val.length === 3 && val.slice(-1) !== '.') {
        //     val += '.'
        // }

        // 整数3桁+小数点1桁に限定
        const flg = /^([1-9][0-9]{0,2}|0)(\.[0-9]{1})?$/i.test(val)
        if (flg || val === '' || val.slice(-1) === '.') {
            setValidatedHeight(val)
            setValue('height', val)
        }
    }

    return (
        <>
            <DefaultLayout>
                <Wrapper>
                    <h2>入力バリデーション</h2>
                    <br />
                    <br />
                    <Stack margin="auto" width="600px" spacing="20px">
                        <Stack direction="row" alignItems="center" spacing="10px">
                            <Box>身長（※整数3桁+小数点1桁に限定）:</Box>
                            <Stack direction="row" alignItems="center" spacing="10px">
                                <Box width="calc(100% - 60px)">
                                    <input
                                        type="text"
                                        inputMode="decimal"
                                        className={formCss.formText}
                                        {...register('height', {
                                            required: true,
                                        })}
                                        value={validatedHeight}
                                        onChange={onChangeHeight}
                                    />
                                </Box>
                                <Box width="60px">cm</Box>
                            </Stack>
                        </Stack>
                    </Stack>
                </Wrapper>
            </DefaultLayout>
        </>
    )
}

export default InputPage
