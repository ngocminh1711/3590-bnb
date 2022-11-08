import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentHouseForRent:null,
    loading:false,
    error:false
}

export const dislikeHouseForRent = createSlice({
    name: "dislike",
    initialState,
    reducers: {
         dislike: (state,action)=>{
            //if trong mang like k chứa id ms làm
            if(!state.currentHouseForRent.dislikes.includes(action.payload)){
                //thêm id ng like vào
                state.currentHouseForRent.dislikes.push(action.payload);
                //tìm trong mảng dislike xem có chưa;; if có  thì gỡ ra
                   const userId=state.currentHouseForRent.likes.findIndex(userId => userId===action.payload)
                state.currentHouseForRent.likes.splice(userId,1)
            }
        },
    }
})

export const {dislike}=dislikeHouseForRent.actions;

export default dislikeHouseForRent.reducer;