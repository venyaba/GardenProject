import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './slices/categoriesSlices'
import productsReducer from './slices/productsSlaces'
import categoryByIdReducer from './slices/categoryByIdSlices'


export const store = configureStore({
    reducer: {
        categoriesData: categoriesReducer ,
        categoryByIdState: categoryByIdReducer,
        productsState: productsReducer,
    }
  })