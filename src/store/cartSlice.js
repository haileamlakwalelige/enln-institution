import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.push(action.payload);
      }
      // Save updated state to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    remove(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
        // Save updated state to localStorage
        localStorage.setItem("cart", JSON.stringify(state));
      }
    }
  }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
