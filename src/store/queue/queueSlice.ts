import { createSlice } from "@reduxjs/toolkit";
import { getAllReservations, getCurrentServingNum, getNextNum, getUserCurrentReservation, reserveQueue } from "./queueAction";
import { IQueueState } from "../../typings/interfaces/IQueueState";

const initialState: IQueueState = {
    queueResponse : { next: 0 , active : undefined},
    queueResponseLoading: false,
    queueResponseError: undefined,

    reserveQueueResponse:  null,
    reserveQueueLoading: false,
    reserveQueueError: undefined,

    currentReserveResponse: null,
    currentReserveLoading: false,
    currentReserveError:  undefined,

    allCusReserveResponse: null,
    allCusReserveLoading: false,
    allCusReserveError:  undefined
}
export const queueSlice = createSlice({
    name: "queue",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        
          builder.addCase(getNextNum.pending, (state) => {
            state.queueResponseLoading = true;
            if(state.queueResponse){
              state.queueResponse.next = 0;
            }
            state.queueResponseError = undefined;
          });
          builder.addCase(getNextNum.fulfilled, (state, action) => {
            if(state.queueResponse){
              state.queueResponse.next = action.payload as number;
            }
            state.queueResponseError = undefined;
            state.queueResponseLoading = false;
          });
          builder.addCase(getNextNum.rejected, (state, action) => {
            state.queueResponseError = action.payload as any;
            state.queueResponseLoading = false;
          });

          builder.addCase(getCurrentServingNum.pending, (state) => {
            state.queueResponseLoading = true;
            if(state.queueResponse){
              state.queueResponse.active = undefined;
            }
            state.queueResponseError = undefined;
          });
          builder.addCase(getCurrentServingNum.fulfilled, (state, action) => {
            if(state.queueResponse){
              state.queueResponse.active = action.payload;
            }
            state.queueResponseError = undefined;
            state.queueResponseLoading = false;
          });
          builder.addCase(getCurrentServingNum.rejected, (state, action) => {
            state.queueResponseError = action.payload as any;
            state.queueResponseLoading = false;
          });

          builder.addCase(reserveQueue.pending, (state) => {
            state.reserveQueueLoading = true;
            state.reserveQueueResponse = null;
            state.reserveQueueError = undefined;
          });
          builder.addCase(reserveQueue.fulfilled, (state, action) => {
            state.reserveQueueResponse = action.payload;
            state.currentReserveResponse = action.payload.value;
            state.currentReserveError = undefined;
            state.reserveQueueError = undefined;
            state.reserveQueueLoading = false;
          });
          builder.addCase(reserveQueue.rejected, (state, action) => {
            state.reserveQueueError = action.payload as any;
            state.reserveQueueLoading = false;
          });

          builder.addCase(getUserCurrentReservation.pending, (state) => {
            state.currentReserveLoading = true;
            state.currentReserveResponse = null;
            state.currentReserveError = undefined;
          });
          builder.addCase(getUserCurrentReservation.fulfilled, (state, action) => {
            state.currentReserveResponse = action.payload.message;
            state.currentReserveError = undefined;
            state.currentReserveLoading = false;
          });
          builder.addCase(getUserCurrentReservation.rejected, (state, action) => {
            state.currentReserveError = action.payload as any;
            state.currentReserveLoading = false;
          });

          builder.addCase(getAllReservations.pending, (state) => {
            state.allCusReserveLoading = true;
            state.allCusReserveResponse = null;
            state.allCusReserveError = undefined;
          });
          builder.addCase(getAllReservations.fulfilled, (state, action) => {
            state.allCusReserveResponse = action.payload;
            state.allCusReserveError = undefined;
            state.allCusReserveLoading = false;
          });
          builder.addCase(getAllReservations.rejected, (state, action) => {
            state.allCusReserveError = action.payload as any;
            state.allCusReserveLoading = false;
          });
    }
})

export default queueSlice.reducer;