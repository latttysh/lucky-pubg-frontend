import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import state from "./Slice/Slice"

export const store = configureStore({
    reducer:{
        state
    }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();