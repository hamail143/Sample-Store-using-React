import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const initialState =
{
    isLoading:false,
    data:null,
    isError:false
}
//for call the api
export const dataFetch=createAsyncThunk('dataFecth',async()=>
{
    const response=await fetch('https://fakestoreapi.com/products')
    return response.json();
})
export const productSlice =createSlice({
    name:'product',
    initialState,
    extraReducers: (builder)=> //use for handle multiple situation by using builder
{
    builder.addCase(dataFetch.pending,(state)=>
    {
        state.isLoading=true
    });
    builder.addCase(dataFetch.fulfilled,(state,action)=>
    {
        state.isLoading=false,
        state.data=action.payload;
    })
    builder.addCase(dataFetch.rejected,(state,action)=>
    {
        state.isError=true
        console.log('Error', action.payload);
    })
}
})
export default productSlice.reducer