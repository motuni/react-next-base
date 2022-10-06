import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

const apiClient = axios.create({
    baseURL: '',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const useUsers = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const func = async () => {
            const res = await axiosFunc().catch((error) => {
                return error.response
            })
        }
        func()
    }, [])
    return null
}
