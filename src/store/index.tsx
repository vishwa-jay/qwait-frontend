import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { categorySlice } from "./category/categorySlice";
import {vendorSlice} from "./vendor/vendorSlice";
import {queueSlice} from "./queue/queueSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        category: categorySlice.reducer,
        vendor: vendorSlice.reducer,
        queue: queueSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;