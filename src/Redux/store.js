import { configureStore } from "@reduxjs/toolkit";
import cockSlice from "./features/cocktailSlice";

export default configureStore({
    reducer:{
        app:cockSlice,
    },
})