



import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    house: {}
}



export const getHouseDetailSlice = createSlice({
    name: 'getHouseDetail',
    initialState,
    reducers: {
        getDetailHouse: (state, action) => {
            state.house = action.payload
            console.log(state.house)
        }
    }
})

export const { getDetailHouse } = getHouseDetailSlice.actions
export default getHouseDetailSlice.reducer