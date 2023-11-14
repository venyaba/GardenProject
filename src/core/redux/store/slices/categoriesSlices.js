import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT_URL}/categories/all`
      );

      if (!response.ok) {
        throw new Error("server error");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategoryById = createAsyncThunk(
  "categoryByID/fetchCategoryById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT_URL}/categories/${id}`
      );

      if (!response.ok) {
        throw new Error("server error");
      }

      const data = await response.json();
      console.log("categoryById", data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const catecoriesSlice = createSlice({
    name: "categoriesData",
    initialState:{
        categories: [],
        categoriesStatus:null,
        categoriesError: null,
        categoryById: null,
        categoryByIdStatus: null,
        categoryByIdError: null,
        minPrice: 0,
        maxPrice: 10000,
        isDiscount: false,
        sortValue: ''
    },
    reducers:{
        getCategories(state,{payload}){
            state.categories =  payload
        },
        getMinPrice(state,{payload}){
          state.minPrice = payload
        },
        getMaxPrice(state,{payload}){
          state.maxPrice = payload
        },
        getIsDiscount(state,{payload}){
          state.isDiscount = payload
        },
        getSortValue(state,{payload}){
           state.sortValue = payload
        }
    },
    extraReducers: (builder)=>{
      builder.addCase(fetchCategories.pending,(state)=>{
        state.categoriesStatus = "pending";
        state.categoriesError = null;
      }).addCase(fetchCategories.fulfilled,(state,{payload})=>{
        state.categoriesStatus = "fulfilled";
        state.categories = payload;
        state.categoriesError = null;
      }).addCase(fetchCategories.rejected,(state,{payload})=>{
        state.categoriesStatus = "rejected";
        state.categoriesError = payload;
      }).addCase(fetchCategoryById.pending, (state) => {
        state.categoryByIdStatus = "pending";
        state.categoryByIdError = null;
      }).addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.categoryByIdStatus = "fullfilled";
        state.categoryById = action.payload;
        state.categoryByIdError = null;
      }).addCase(fetchCategoryById.rejected, (state, action) => {
        state.categoryByIdStatus = "rejected";
        state.categoryByIdError = action.payload;
      })
    }
})

export const { getCategories ,getMaxPrice,getMinPrice,getIsDiscount, getSortValue} = catecoriesSlice.actions;

export default catecoriesSlice.reducer;