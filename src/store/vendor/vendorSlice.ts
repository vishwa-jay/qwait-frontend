import { createSlice } from "@reduxjs/toolkit";
import { IVendorBranchState } from "../../typings/interfaces/IVendorState";
import { getQueueByQueueNo, getVendorBranch, getVendorsAllReservations } from "./vendorAction";

const initialState: IVendorBranchState = {
    venResponse : null,
    venResponseLoading: false,
    venResponseError: undefined,

    venAllReservationsResponse: 0,
    venAllReservationsLoading: false,
    venAllReservationsError: undefined,

    currentServingNoResponse: null,
    currentServingNoLoading: false,
    currentServingNoError: undefined
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

          builder.addCase(getVendorsAllReservations.pending, (state) => {
            state.venAllReservationsLoading = true;
            state.venAllReservationsResponse = null;
            state.venAllReservationsError = undefined;
          });
          builder.addCase(getVendorsAllReservations.fulfilled, (state, action) => {
            state.venAllReservationsResponse = action.payload;
            state.venAllReservationsError = undefined;
            state.venAllReservationsLoading = false;
          });
          builder.addCase(getVendorsAllReservations.rejected, (state, action) => {
            state.venAllReservationsError = action.payload as any;
            state.venAllReservationsLoading = false;
          });

          builder.addCase(getQueueByQueueNo.pending, (state) => {
            state.currentServingNoLoading = true;
            state.currentServingNoResponse = null;
            state.currentServingNoError = undefined;
          });
          builder.addCase(getQueueByQueueNo.fulfilled, (state, action) => {
            state.currentServingNoResponse = action.payload;
            state.currentServingNoError = undefined;
            state.currentServingNoLoading = false;
          });
          builder.addCase(getQueueByQueueNo.rejected, (state, action) => {
            state.currentServingNoError = action.payload as any;
            state.currentServingNoLoading = false;
          });

    }
})

export default vendorSlice.reducer;