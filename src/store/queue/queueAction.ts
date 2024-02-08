import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetCurrentServingNum, GetNextNum } from "../../service/apiMethods";

export const getNextNum = createAsyncThunk(
  "vendor/getNextNum",
  async (branch: number, { rejectWithValue, getState }) => {
    try {
      const res = await GetNextNum(branch);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentServingNum = createAsyncThunk(
  "vendor/getCurrentServingNum",
  async (branch: number, { rejectWithValue, getState }) => {
    try {
      const res = await GetCurrentServingNum(branch);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
