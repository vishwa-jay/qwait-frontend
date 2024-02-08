import { createSlice } from "@reduxjs/toolkit";
import { IVendorBranchState } from "../../typings/interfaces/IVendorState";
import { getVendorBranch } from "./vendorAction";

const initialState: IVendorBranchState = {
    venResponse : null,
    venResponseLoading: false,
    venResponseError: undefined
}
export const vendorSlice = createSlice({
    name: "vendor",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getVendorBranch.pending, (state) => {
            state.venResponseLoading = true;
            state.venResponse = null;
            state.venResponseError = undefined;
          });
          builder.addCase(getVendorBranch.fulfilled, (state, action) => {
            state.venResponse = action.payload;
            state.venResponseError = undefined;
            state.venResponseLoading = false;
          });
          builder.addCase(getVendorBranch.rejected, (state, action) => {
            state.venResponseError = action.payload as any;
            state.venResponseLoading = false;
          });

    }
})

export default vendorSlice.reducer;