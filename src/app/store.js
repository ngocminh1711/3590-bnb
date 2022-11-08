import { configureStore } from '@reduxjs/toolkit';
import createBackdropURL from "../features/createBackdrop/createBackdropSlice";
import createImageViewURL from "../features/createImageView/createImageViewSlice";
import createUserLogin from "../features/addUserToNavbar/addUserToNavbarSlice.js";
import searchReducer from "../features/search/searchSlice"
import likeHouseForRentReducer from "../features/likeanddislikeSlice/likeSlice"
import dislikeHouseForRentReducer from "../features/likeanddislikeSlice/disLikeSlice"
// import searchReducer from "../features/search/searchSlice";
import profileUserReducer from '../features/userProfile/UserProfileSlice.js'
import searchReducer from "../features/search/searchSlice";
import profileUserReducer from '../features/userProfile/UserProfileSlice.js';
import getHouseDetail from "../features/getHouseDetail/GetHouseDetailSlice";



export const store = configureStore({
  reducer: {
    createBackdrop: createBackdropURL,
    createImageView: createImageViewURL,
    createUserLogin: createUserLogin,
    search: searchReducer,
    like : likeHouseForRentReducer,
    dislike:dislikeHouseForRentReducer,
    profileUser: profileUserReducer,
    getHouse: getHouseDetail,
  },
});

