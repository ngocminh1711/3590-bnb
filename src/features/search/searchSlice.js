import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    searchedHouse: [],
    searchedTop4: [],
    searchedVipHouse: [],
    searchedNormalHouse: [],
    searchedOneBedRoom: [],
    searchedMultipleBedRoom: [],
    searchedHouseLess500: [],
    searchedHouseThan500: [],
    searchedHouseThan1000: [],

};


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers :
        {
            searchHouse: (state, action) => {
                state.searchedHouse = action.payload
            },
            searchTop4: (state, action) => {
                state.searchedTop4 = action.payload
            },
            searchVipHouse: (state, action) => {
                state.searchedVipHouse = action.payload
            },
            searchNormalHouse: (state, action) => {
                state.searchedNormalHouse = action.payload
            },
            searchOneBedRoom: (state, action) => {
                state.searchedOneBedRoom = action.payload
            },
            searchMultipleBedRoom: (state, action) => {
                state.searchedMultipleBedRoom = action.payload
            },
            searchHouseLess500: (state, action) => {
                state.searchedHouseLess500 = action.payload
            },
            searchHouseThan500:(state, action)=> {
                state.searchedHouseThan500 = action.payload
            },
            searchHouseThan1000:(state, action)=> {
                state.searchedHouseThan1000 = action.payload
            }


        }
})

export const { searchHouse, searchTop4, searchVipHouse ,searchNormalHouse,searchOneBedRoom,searchMultipleBedRoom,searchHouseLess500,searchHouseThan500,searchHouseThan1000 } = searchSlice.actions
export default searchSlice.reducer