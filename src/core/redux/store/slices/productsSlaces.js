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

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: null,
    error: null,
  },
  reducers: {
    getProducts(state, { payload }) {
      return (state.products = payload);
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.status = "fullfilled";
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    })
  }
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;


