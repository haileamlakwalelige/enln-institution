import { createSlice } from "@reduxjs/toolkit";

const singleItemSlice = createSlice({
  name: 'singleItem',
  initialState: {
    item: null,
  },
  reducers: {
    addSingleItem: (state, action) => {
      // If there is already a single item, remove it
      if (state.item) {
        state.item = null;
      }
      // Add the new single item
      state.item = action.payload;
    },
    clearSingleItem: (state) => {
      state.item = null;
    },
  },
});

export const { addSingleItem, clearSingleItem } = singleItemSlice.actions;
export default singleItemSlice.reducer;