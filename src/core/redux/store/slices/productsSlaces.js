import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT_URL}/products/all`
      );

      if (!response.ok) {
        throw new Error("server error");
      }
      const products = await response.json();
      return products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT_URL}/products/${id}`
      );

      if (!response.ok) {
        throw new Error("server error");
      }
      const productDetails = await response.json();
      return productDetails;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: null,
    error: null,
    productById: null,
    productByIdStatus: null,
    productByIdError: null
  },
  reducers: {
    getProducts(state, { payload }) {
      return (state.products = payload);
    },
    getProductById(state, {payload}){
      return state.productById = payload
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.status = "pending";
      state.error = null;
    })
    .addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.status = "fullfilled";
      state.products = action.payload;
      state.error = null;
    })
    .addCase(fetchAllProducts.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    })
    .addCase(fetchProductById.pending, (state)=>{
      state.productByIdStatus = "pending";
      state.productByIdError = null;
    })
    .addCase(fetchProductById.fulfilled, (state,{payload})=>{
      state.productByIdStatus = "fulfilled";
      state.productById = payload[0];
      state.productByIdError = null;
    })
    .addCase(fetchProductById.rejected, (state,{payload})=>{
      state.productByIdStatus = "rejected";
      state.productByIdError = payload
      ;
    })
  }
});

export const { getProducts, getProductById} = productsSlice.actions;

export default productsSlice.reducer;


