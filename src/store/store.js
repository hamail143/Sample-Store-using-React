import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice'; // Import cart reducer
import productReducer from './productSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,   
    product: productReducer   // Add cart slice
    
  },
});

export default store;
