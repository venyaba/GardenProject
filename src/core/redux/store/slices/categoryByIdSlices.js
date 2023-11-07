import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  
  const catecorySlice = createSlice({
      name: "categoryById",
      initialState:{
          category: null,
          status:null,
          error: null
      },
      reducers:{
          getCategory(state,{payload}){
              return payload
          }
      },
      extraReducers: (builder)=>{
        builder.addCase(fetchCategoryById.pending, (state) => {
          state.status = "pending";
          state.error = null;
        });
        builder.addCase(fetchCategoryById.fulfilled, (state, action) => {
          state.status = "fullfilled";
          state.category = action.payload;
          state.error = null;
        });
        builder.addCase(fetchCategoryById.rejected, (state, action) => {
          state.status = "rejected";
          state.error = action.payload;
        })
      }
  })
  
  export const { getCategory } = catecorySlice.actions;
  
  export default catecorySlice.reducer;