import { createSlice } from "@reduxjs/toolkit";
import { ICatState } from "../../typings/interfaces/ICatState";
import { getVendorCategory } from "./categoryAction";

const initialState: ICatState = {
  catResponse: null,
  catResponseLoading: false,
  catResponseError: undefined,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVendorCategory.pending, (state) => {
      state.catResponseLoading = true;
      state.catResponseError = undefined;
    });
    builder.addCase(getVendorCategory.fulfilled, (state, action) => {
      state.catResponse = action.payload;
      state.catResponseError = undefined;
      state.catResponseLoading = false;
    });
    builder.addCase(getVendorCategory.rejected, (state, action) => {
      state.catResponseError = action.payload as any;
      state.catResponseLoading = false;
    });
  },
});

export default categorySlice.reducer;