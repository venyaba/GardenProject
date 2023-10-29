import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './slices/categoriesSlices'
import productsReducer from './slices/productsSlaces'


export const store = configureStore({
    reducer: {
        categoriesState: categoriesReducer,
        productsState: productsReducer
    }
  })