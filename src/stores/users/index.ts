import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Users = {
    title: string
    description: string
    height: string
    countries: string[]
    continent: string
    image: string
    dir: string
    path: string
    slug: string
    updatedAt: string
}

type UsersState = {
    users: Users[]
}

const initialState: UsersState = {
    users: [],
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUsers(state, action: PayloadAction<UsersState>) {
            state = action.payload
        },
        resetUsers: () => {
            return initialState
        },
    },
})

// Redux Thunk
export const getUsers = () => {
    return async (dispatch: AnyAction) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        dispatch(updateUsers(data))
    }
}

export const { updateUsers, resetUsers } = usersSlice.actions
export default usersSlice.reducer
