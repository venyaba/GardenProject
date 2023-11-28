import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './slices/categoriesSlices'
import productsReducer from './slices/productsSlaces'
import  cartReducer  from './slices/cartSlices'
import orderReducer from './slices/orderSlice'


export const store = configureStore({
    reducer: {
        categoriesState: categoriesReducer ,
        products: productsReducer,
        cart: cartReducer,
        order: orderReducer
    }
  })

 