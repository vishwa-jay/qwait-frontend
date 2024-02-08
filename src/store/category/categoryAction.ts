import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetVendorCategoryAPI } from "../../service/apiMethods";

export const getVendorCategory = createAsyncThunk(
    "category/getVendorCategory",
    async (_,{ rejectWithValue, getState }) => {
      try {
        const res = await GetVendorCategoryAPI();
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );