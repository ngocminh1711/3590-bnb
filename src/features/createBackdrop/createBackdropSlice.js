

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    backDropUrl: ''
}


export const createBackdropSlice = createSlice({
    name: 'createBackdrop',
    initialState,
    reducers: {
        createBackdropURL: (state, action) => {
            state.backDropUrl = action.payload
        }
    }
})

export const { createBackdropURL } = createBackdropSlice.actions
export default createBackdropSlice.reducer