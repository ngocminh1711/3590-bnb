
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    backdropURl: ''
}


export const createBackdropSlice = createSlice({
    name: 'createBackdrop',
    initialState,
    reducers: {
        createBackdropURL: (state, action) => {
            state.backdropURl = action.payload
        }
    }
})

export const { createBackdropURL } = createBackdropSlice.actions
export default createBackdropSlice.reducer