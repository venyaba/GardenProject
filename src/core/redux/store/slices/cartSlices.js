import { createSlice } from '@reduxjs/toolkit';

const saveToStorage = (state) => localStorage.setItem("cart", JSON.stringify(state.cart))

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    addToCart: (state, {payload}) => {
      const itemInCart = state.cart.find((item) => item.id === payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
      saveToStorage(state)
    },
    incrementQuantity: (state, {payload}) => {
      const item = state.cart.find((item) => item.id === payload);
      item.quantity++;
      saveToStorage(state)
    },
    decrementQuantity: (state, {payload}) => {
      const item = state.cart.find((item) => item.id === payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
      saveToStorage(state)
    },
    removeItem: (state, {payload}) => {
      const removeItem = state.cart.filter((item) => item.id !== payload);
      state.cart = removeItem;
      saveToStorage(state)
    },
    cleanCart:(state)=>{
      state.cart = []
      localStorage.removeItem('cart')
    }
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  cleanCart
} = cartSlice.actions;