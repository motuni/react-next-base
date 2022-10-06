import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Posts = {
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

type PostsState = {
    posts: Posts[]
}

const initialState: PostsState = {
    posts: [],
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        updatePosts(state, action: PayloadAction<PostsState>) {
            state = action.payload
        },
        resetPosts: () => {
            return initialState
        },
    },
})

export const { updatePosts, resetPosts } = postsSlice.actions
export default postsSlice.reducer
