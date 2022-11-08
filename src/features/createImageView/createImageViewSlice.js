
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    urls: []
}

export const createImageViewSlice = createSlice({
    name: 'createImageView',
    initialState,
    reducers: {
        createImageViewURL: (state, action) => {
            state.urls.push(action.payload)
        }
    }
})

export const { createImageViewURL } = createImageViewSlice.actions
export default createImageViewSlice.reducer