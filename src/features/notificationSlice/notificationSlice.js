import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    notification: [],
    bookingId: ""
}


export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        getBookingId: (state, action) => {
            state.bookingId = action.payload
        },
        getAllNotification: (state, action) => {
            state.notification = action.payload
        }
    }
})

export const {getAllNotification, getBookingId} = notificationSlice.actions
export default notificationSlice.reducer