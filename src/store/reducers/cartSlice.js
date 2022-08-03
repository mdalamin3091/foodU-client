import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
    sort:"",
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const newItem = payload;
      const existItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );
      state.totalQuantity++;
      if (!existItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existItem.quantity++;
        existItem.totalPrice = existItem.totalPrice + newItem.price;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, { payload }) => {
      const id = payload;
      const existItem = state.cartItems.find((item) => item._id === id);
      state.totalQuantity--;
      if (existItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item._id !== id);
      } else {
        existItem.quantity--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    deleteProduct: (state, { payload }) => {
      const id = payload;
      const existItem = state.cartItems.find((item) => item._id === id);
      if (existItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== existItem.id
        );
        state.totalQuantity = state.totalQuantity - existItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    removeAllProduct:(state, {payload}) =>{
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0
    },
    sortProduct:(state, {payload}) =>{
      state.sort = payload;
    }
  },
});

export const { addToCart, removeFromCart, deleteProduct, removeAllProduct, sortProduct } = cartSlice.actions;
export default cartSlice.reducer;
