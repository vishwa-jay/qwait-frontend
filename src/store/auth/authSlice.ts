import { createSlice } from "@reduxjs/toolkit";
import { authenticate } from "./authAction";
import { IAuthState } from "../../typings/interfaces/IAuthState";

const initialState : IAuthState = {
    authResponse: null,
    authResponseLoading: false,
    authResponseError: undefined
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
    },
    extraReducers : (builder) =>{
        builder.addCase(authenticate.pending, (state) => {
            state.authResponseLoading = true;
          });
          builder.addCase(authenticate.fulfilled, (state, action) => {
            state.authResponse = action.payload;
            state.authResponseLoading = false;
          });
          builder.addCase(authenticate.rejected, (state, action) => {
            state.authResponseError = action.payload as any;
            state.authResponseLoading = false;
          });
    }

})

export default authSlice.reducer;