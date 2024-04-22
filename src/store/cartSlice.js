import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        // If the item exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      // Find the index of the item to remove
      const itemIndexToRemove = state.items.findIndex(item => item.id === itemIdToRemove);
      if (itemIndexToRemove !== -1) {
        // Remove the item from the cart
        state.items.splice(itemIndexToRemove, 1);
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
