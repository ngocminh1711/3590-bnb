import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userLogin : localStorage.getItem('username')
};

const createUserLoginSlice = createSlice({
    name : "createUserLogin",
    initialState: initialState,
    reducers: {
        getUserLogin: (state, action) => {
            state.userLogin.push(action.payload);
        },
        clearUserLogin: (state) => {
            state.userLogin = []
        }
    }
});

export const {getUserLogin, clearUserLogin} = createUserLoginSlice.actions;
export default createUserLoginSlice.reducer;
