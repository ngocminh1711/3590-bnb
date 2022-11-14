import { createSlice } from "@reduxjs/toolkit"

let idUserLogin =  JSON.parse(localStorage.getItem('_id'))?? undefined

const initialState = {
    profile : [],
    idUserLogin: idUserLogin
};

const profileUserSilce = createSlice({
    name : "profileUser",
    initialState: initialState,
    reducers: {
        getProfileUser: (state, action) => {
            state.profile.push(action.payload);
        },
        clearProfileUser: (state) => {
            state.profile = []
        },
        setIdUserLogin: (state, action) => {
            state.idUserLogin = action.payload
        }
    }
});

export const {getProfileUser, clearProfileUser, setIdUserLogin} = profileUserSilce.actions;
export default profileUserSilce.reducer;
