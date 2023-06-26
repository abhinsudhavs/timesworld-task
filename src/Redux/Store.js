import { configureStore } from "@reduxjs/toolkit";
import CountrySliceReducer from "./Slices/CountrySlice";
const store = configureStore({
  reducer: {
    COUTRIES: CountrySliceReducer,
  },
});

export default store;
