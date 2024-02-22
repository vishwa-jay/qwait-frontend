import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchVendorAPI } from "../../service/apiMethods";

export const getVendorBranch = createAsyncThunk(
  "vendor/getVendorBranch",
  async (query: any, { rejectWithValue, getState }) => {
    try {
      const res = await SearchVendorAPI(query);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
