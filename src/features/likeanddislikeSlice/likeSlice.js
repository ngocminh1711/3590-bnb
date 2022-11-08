import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentHouseForRent: null,
  loading: false,
  error: false,
};

export const likeHouseForRent = createSlice({
  name: "like",
  initialState,
  reducers: {
    like: (state, action) => {
      //if trong mang like k chứa id ms làm
      if (!state.currentHouseForRent.likes.includes(action.payload)) {
        //thêm id ng like vào
        state.currentHouseForRent.likes.push(action.payload);
        //tìm trong mảng dislike xem có chưa;; if có  thì gỡ ra
        const userId = state.currentHouseForRent.dislikes.findIndex(
          (userId) => userId === action.payload
        );
        state.currentHouseForRent.dislikes.splice(userId, 1);
      }
    },
  },
});

export const {like} = likeHouseForRent.actions;

export default likeHouseForRent.reducer;
