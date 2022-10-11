import {initialStateI} from "./Types";
import {createSlice} from "@reduxjs/toolkit";
import {AsyncAuth, AsyncGetCases, AsyncGetInventory, AsyncGetProductsCase, AsyncGetUserFinance} from "./AsyncActions";

const initialState: initialStateI ={
    User: {
        data:{},
        finance:{},
        inventory:{},
        status: "idle"
    },
    Cases: {
        data: {},
        products: {},
        status: "idle"
    }

}

const LuckySlice = createSlice({
    name: "state",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(AsyncAuth.pending, (state, action) => {
            state.User.status ="loading"
        })
        builder.addCase(AsyncAuth.fulfilled, (state, action) => {
            state.User.status ="loaded"
            // @ts-ignore
            state.User.data = action.payload
        })
        builder.addCase(AsyncAuth.rejected, (state, action) => {
            state.User.status ="error"
        })


        builder.addCase(AsyncGetCases.pending, (state, action) => {
            state.Cases.status ="loading"
        })
        builder.addCase(AsyncGetCases.fulfilled, (state, action) => {
            state.Cases.status ="loaded"
            state.Cases.data = action.payload
        })
        builder.addCase(AsyncGetCases.rejected, (state, action) => {
            state.Cases.status ="error"
        })


        builder.addCase(AsyncGetProductsCase.pending, (state, action) => {
            state.Cases.status ="loading"
        })
        builder.addCase(AsyncGetProductsCase.fulfilled, (state, action) => {
            state.Cases.status ="loaded"
            state.Cases.products = action.payload
        })
        builder.addCase(AsyncGetProductsCase.rejected, (state, action) => {
            state.Cases.status ="error"
        })


        builder.addCase(AsyncGetUserFinance.pending, (state, action) => {
            state.User.status ="loading"
        })
        builder.addCase(AsyncGetUserFinance.fulfilled, (state, action) => {
            state.User.status ="loaded"
            state.User.finance = action.payload
        })
        builder.addCase(AsyncGetUserFinance.rejected, (state, action) => {
            state.User.status ="error"
        })


        builder.addCase(AsyncGetInventory.pending, (state, action) => {
            state.User.status ="loading"
        })
        builder.addCase(AsyncGetInventory.fulfilled, (state, action) => {
            state.User.status ="loaded"
            state.User.inventory = action.payload
        })
        builder.addCase(AsyncGetInventory.rejected, (state, action) => {
            state.User.status ="error"
        })
    }
})


export default LuckySlice.reducer