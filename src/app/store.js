import { configureStore } from '@reduxjs/toolkit';
import createBackdropURL from "../features/createBackdrop/createBackdropSlice";
import createImageViewURL from "../features/createImageView/createImageViewSlice";
import createUserLogin from "../features/addUserToNavbar/addUserToNavbarSlice.js"



export const store = configureStore({
  reducer: {
    createBackdrop: createBackdropURL,
    createImageView: createImageViewURL,
    createUserLogin: createUserLogin
  },
});

