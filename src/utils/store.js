import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import searchSlice from "./searchSlice"

const AppStore = configureStore({
    reducer:{
          app : appSlice,
          search : searchSlice
    }
})

export default AppStore