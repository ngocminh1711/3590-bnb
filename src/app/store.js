import { configureStore } from '@reduxjs/toolkit';
import createBackdropURL from "../features/createBackdrop/createBackdropSlice";
import createImageViewURL from "../features/createImageView/createImageViewSlice";



export const store = configureStore({
  reducer: {
    createBackdrop: createBackdropURL,
    createImageView: createImageViewURL
  },
});
