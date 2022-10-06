import React, { useEffect } from 'react'
import { Stack, Box } from '@mui/material'
import type { NextPage } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import { Wrapper } from 'components/layouts/Wrapper'
import DefaultLayout from 'components/templates/DefaultLayout'
import { RootState } from 'stores'
import { Users, getUsers } from 'stores/users'

const UsersPage: NextPage = () => {
    const { users } = useSelector((state: RootState) => state.users)
    const dispatch = useDispatch()

    const labelStyle = {
        width: '200px',
        fontSize: '1.6rem',
        textAlign: 'left',
        lineHeight: '2.2rem',
    }
    const dataStyle = {
        width: '480px',
        fontSize: '1.6rem',
        textAlign: 'left',
        lineHeight: '2.2rem',
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <>
            <DefaultLayout>
                <Wrapper>
                    <h2>Users</h2>
                    <br />
                    <Stack margin="auto" width="680px" spacing="40px">
                        {users &&
                            users.map((user: Users) => (
                                <Stack spacing="20px" key={user.slug}>
                                    <Stack direction="row" spacing="10px">
                                        <Box sx={labelStyle}>title</Box>
                                        <Box sx={dataStyle}>{user.title}</Box>
                                    </Stack>
                                </Stack>
                            ))}
                    </Stack>
                </Wrapper>
            </DefaultLayout>
        </>
    )
}

export default UsersPage
