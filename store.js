import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./src/features/hotelSlice";

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
});

export default store;
