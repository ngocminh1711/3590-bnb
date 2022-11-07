



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

        }
    }
})

export const { getDetailHouse } = getHouseDetailSlice.actions
export default getHouseDetailSlice.reducer