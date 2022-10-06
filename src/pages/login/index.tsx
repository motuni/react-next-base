import React from 'react'
import type { NextPage } from 'next'
import { Wrapper } from 'components/layouts/Wrapper'
import Nav from 'components/modules/Nav'
import DefaultLayout from 'components/templates/DefaultLayout'

const LoginPage: NextPage = () => {
    return (
        <>
            <DefaultLayout>
                <Wrapper>
                    <Nav />
                </Wrapper>
            </DefaultLayout>
        </>
    )
}

export default LoginPage
