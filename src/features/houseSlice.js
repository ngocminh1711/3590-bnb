import { createSlice} from "@reduxjs/toolkit";



const initialState = {
    houseDetail: [],

}

const houseSlice = createSlice({
    name: "house",
    initialState: initialState,
    reducers:{
        getHouseDetail :(state,action) => {
            state.houseDetail.push(action.payload);
        }    }
})
export const {getHouseDetail} = houseSlice.actions

export default houseSlice.reducer