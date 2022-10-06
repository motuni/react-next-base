import React from 'react'
import { Stack, Box } from '@mui/material'
import type { NextPage } from 'next'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useDispatch } from 'react-redux'
import { Wrapper } from 'components/layouts/Wrapper'
import DefaultLayout from 'components/templates/DefaultLayout'
import { Posts, updatePosts } from 'stores/posts'

const BlogPage: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const dispatch = useDispatch()
    dispatch(updatePosts(posts))

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

    return (
        <>
            <DefaultLayout>
                <Wrapper>
                    <h2>Blog</h2>
                    <br />
                    <br />
                    <Stack margin="auto" width="680px" spacing="40px">
                        {posts.map((post: Posts) => (
                            <Stack spacing="20px" key={post.title}>
                                <Stack direction="row" spacing="10px">
                                    <Box sx={labelStyle}>title</Box>
                                    <Box sx={dataStyle}>{post.title}</Box>
                                </Stack>
                                <Stack direction="row" spacing="10px">
                                    <Box sx={labelStyle}>description</Box>
                                    <Box sx={dataStyle}>{post.description}</Box>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Wrapper>
            </DefaultLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://api.nuxtjs.dev/mountains')
    const posts: Posts = await res.json()
    return {
        props: {
            posts,
        },
    }
}

export default BlogPage
