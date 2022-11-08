import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    searchedHouse: [],
    searchedTop4: [],
    searchedVipHouse: [],
    searchedNormalHouse: [],
    searchedOneBedRoom: [],
    searchedMultipleBedRoom: [],

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
            }

        }
})

export const { searchHouse, searchTop4, searchVipHouse ,searchNormalHouse,searchOneBedRoom,searchMultipleBedRoom } = searchSlice.actions
export default searchSlice.reducer