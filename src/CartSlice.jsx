import { createSlice } from '@reduxjs/toolkit';

const parseCost = (cost) => {
  if (typeof cost === 'number') return cost;
  return Number(String(cost).replace(/[^0-9.-]+/g, '')) || 0;
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const payload = action.payload;
      const existingItem = state.items.find(item => item.name === payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const priceValue = payload.price ?? parseCost(payload.cost);
        state.items.push({
          ...payload,
          quantity: 1,
          price: priceValue,
          cost: `$${priceValue.toFixed(2)}`,
        });
      }
    },
    removeItem: (state, action) => {
      const name = action.payload.name || action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (!existingItem) return;
      if (quantity <= 0) {
        state.items = state.items.filter(item => item.name !== name);
      } else {
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
