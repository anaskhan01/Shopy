import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
     
        state[existingItemIndex].quantity++;
      } else {
      
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state[itemIndex].quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1 && state[itemIndex].quantity > 1) {
        state[itemIndex].quantity--;
      }
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
