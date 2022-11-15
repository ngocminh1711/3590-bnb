
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   idUser: ""
}

export const getHostProfileSlice = createSlice({
    name: 'getHostProfile',
    initialState,
    reducers: {
        getHostProfile: (state, action) => {
           state.userId = action.payload
        }
    }
})

export const { getHostProfile } = getHostProfileSlice.actions
export default getHostProfileSlice.reducer