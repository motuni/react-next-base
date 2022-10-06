import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const HomePage: NextPage = () => {
    const router = useRouter()
    if (typeof window !== 'undefined') {
        router.push('/login')
    }

    return <div />
}

export default HomePage
