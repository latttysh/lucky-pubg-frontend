import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

export const AsyncAuth = createAsyncThunk(
    "user/auth",
    async (params: any) => {
        const {data} = await axios.post("/auth", params)
    }
)

export const AsyncGetCases = createAsyncThunk(
    "cases/get",
    async ()=> {
        const {data} = await axios.get("/cases")
        return data
    }
)

export const AsyncGetProductsCase = createAsyncThunk(
    "cases/get-products",
    async (params:any)=> {
        const {data} = await axios.get(`/cases/products/${params.case_id}`)
        return data
    }
)

export const AsyncGetWinner = createAsyncThunk(
    "cases/getWinner",
    async (params:any) => {
        const {data} = await axios.get(`/cases/check/${params.case_id}`)
        return data
    }
)

export const AsyncGetPayForm = createAsyncThunk(
    "finance/getForm",
    async (params:any) => {
        const {data} = await axios.post("/finance/createForm", params)
        return data
    }
)

export const AsyncGetUserFinance = createAsyncThunk(
    "finance/get",
    async (params:any) => {
        const {data} = await axios.get(`/finance/${params.id}`)
        return data
    }
)

export const AsyncGetInventory = createAsyncThunk(
    "inventory/get",
    async (params:any) => {
        const {data} = await axios.get(`/inventory/${params.userId}`)
        return data
    }
)

export const AsyncAuthMe = createAsyncThunk(
    "auth/getMe",
    async () => {
        const {data} = await axios.get("/auth/authMe", {headers:{
            "Authorization": localStorage.getItem("token")
            }})
        return data
    }
)