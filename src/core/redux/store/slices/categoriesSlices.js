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

const catecoriesSlice = createSlice({
    name: "categories",
    initialState:{
        categories: [],
        status:null,
        error: null
    },
    reducers:{
        getCategories(state,{payload}){
            return payload
        }
    },
    extraReducers:{
        [fetchCategories.pending]: (state)=>{
            state.status = "loading"
            state.error = null
        },
        [fetchCategories.fulfilled]: (state,action)=>{
            state.status = "resolved"
            state.categories = action.payload 
        },
        [fetchCategories.rejected]: (state,action)=>{
            state.status = "rejected"
            state.error = action.payload
        }
      }
})

export const { getCategories } = catecoriesSlice.actions;

export default catecoriesSlice.reducer;