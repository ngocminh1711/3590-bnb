import { configureStore } from '@reduxjs/toolkit';
import houseSlice from "../features/houseSlice";


export const store = configureStore({
  reducer: {
    house: houseSlice,
  }
});
