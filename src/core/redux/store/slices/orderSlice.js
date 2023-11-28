import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrder = createAsyncThunk(
  "orders/fetchOrder",
  async (phoneNumber, { rejectWithValue }) => {
    try {
    await fetch(`${process.env.REACT_APP_ENDPOINT_URL}/order/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(phoneNumber),
      });
  
    } catch (error) {
      return rejectWithValue({ message: "Error something went wrong!" });
    }
  }
);

export const fetchDiscount = createAsyncThunk(
    'orders/fetchDiscount',async function(phoneData,{rejectWithValue}){
        try{
             await fetch(`${process.env.REACT_APP_ENDPOINT_URL}/sale/send`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(phoneData)
            });
            
        }catch(error){
            console.error(error);
            return rejectWithValue({message:'Error something went wrong!'});
        }
    }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    phoneNumber: null,
    orderStatus:null,
    orderError: null,
    discountError:null,
    discountStatus: null
  },
  reducers: {
    getPhoneNumber(state, { payload }) {
      state.phoneNumber = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.orderStatus = "pending";
        state.orderError= null;
      })
      .addCase(fetchOrder.fulfilled, (state) => {
        state.orderStatus = "fulfilled";
        state.orderError= null;
      })
      .addCase(fetchOrder.rejected, (state, {payload}) => {
        state.orderStatus = "rejected";
        state.orderError = payload;
      })
      .addCase(fetchDiscount.rejected, (state, {payload}) => {
        state.discountStatus = "rejected";
        state.discountError = payload;
      })
      .addCase(fetchDiscount.pending, (state) => {
        state.discountStatus = "pending";
        state.discountError = null;
      })
      .addCase(fetchDiscount.fulfilled, (state) => {
        state.discountStatus = "fulfilled";
        state.discountError = null;
      })
      
  },
});


export const {getPhoneNumber} = orderSlice.actions;
export default orderSlice.reducer;