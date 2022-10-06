import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import fontSizeSlice from './fontSize'
import postsSlice from './posts'
import usersSlice from './users'

const storage = createWebStorage('local')
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['font'],
}

const rootReducer = combineReducers({
    posts: postsSlice,
    users: usersSlice,
    font: fontSizeSlice,
})

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})
