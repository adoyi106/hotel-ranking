import { createSlice } from "@reduxjs/toolkit";
import { saveHotelsToLocalStorage } from "../utils/useLocalStorage";

const initialState = {
  hotels: JSON.parse(localStorage.getItem("hotels")) || [],
};
const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addHotel(state, action) {
      state.hotels.push(action.payload);
      saveHotelsToLocalStorage(state.hotels);
    },
    deleteHotel(state, action) {
      state.hotels = state.hotels.filter(
        (hotel) => hotel.id !== action.payload
      );
      saveHotelsToLocalStorage(state.hotels);
    },
    editHotel(state, action) {
      const { id, newData } = action.payload;
      const index = state.hotels.findIndex((hotel) => hotel.id === id);
      if (index !== -1) {
        state.hotels[index] = { ...state.hotels[index], ...newData };
      }
    },
  },
});
export const { addHotel, deleteHotel, editHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
