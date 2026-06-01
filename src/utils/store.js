import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"

const AppStore = configureStore({
    reducer:{
          app : appSlice
    }
})

export default AppStore