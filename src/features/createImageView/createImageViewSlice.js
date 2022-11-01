
import { createSlice } from "@reduxjs/toolkit";


const initialState = [];



export const createImageViewSlice = createSlice({
    name: 'createImageView',
    initialState,
    reducers: {
        createImageViewURL: (state, action) => {

        }
    }
})

export const { createImageViewURL } = createImageViewSlice.actions
export default createImageViewSlice.reducer