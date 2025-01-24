import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        name: "store"
    }
})
export default store;