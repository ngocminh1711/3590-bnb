import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    searchedHouse: [],
};


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers :
        {
            searchHouse: (state, action) => {
                state.searchedHouse = action.payload
            }
        }
})

export const { searchHouse } = searchSlice.actions
export default searchSlice.reducer