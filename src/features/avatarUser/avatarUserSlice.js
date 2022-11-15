import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    avatarUserURl: ''
}


export const avatarUserSlice = createSlice({
    name: 'avatarUser',
    initialState,
    reducers: {
        createAvatarUserURL: (state, action) => {
            state.avatarUserURl = action.payload

        }
    }
})

export const {createAvatarUserURL} = avatarUserSlice.actions
export default avatarUserSlice.reducer