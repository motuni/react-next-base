import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type FontSizeState = {
    size: 'sm' | 'md' | 'lg'
}

const initialState: FontSizeState = {
    size: 'sm',
}

export const fontSizeSlice = createSlice({
    name: 'font',
    initialState,
    reducers: {
        updateFontSize(state, action: PayloadAction<FontSizeState>) {
            state.size = action.payload.size
        },
        reset: () => {
            return initialState
        },
    },
})

export const { updateFontSize, reset } = fontSizeSlice.actions
export default fontSizeSlice.reducer
