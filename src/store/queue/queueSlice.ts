import { createSlice } from "@reduxjs/toolkit";
import { getCurrentServingNum, getNextNum } from "./queueAction";
import { IQueueState } from "../../typings/interfaces/IQueueState";

const initialState: IQueueState = {
    queueResponse : { next: 0 , active : undefined},
    queueResponseLoading: false,
    queueResponseError: undefined
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
    }
})

export default queueSlice.reducer;