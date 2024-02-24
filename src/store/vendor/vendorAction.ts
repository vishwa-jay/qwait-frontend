import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetQueueByQueueNoAPI, GetVendorsAllReservationsAPI, SearchVendorAPI } from "../../service/apiMethods";

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

export const getVendorsAllReservations = createAsyncThunk(
  "vendor/getVendorsAllReservations",
  async (vendorId: any, { rejectWithValue, getState }) => {
    try {
      const res = await GetVendorsAllReservationsAPI(vendorId);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)


export const getQueueByQueueNo = createAsyncThunk(
  "vendor/getQueueByQueueNo",
  async (request: any, { rejectWithValue, getState }) => {
    try {
      const res = await GetQueueByQueueNoAPI(request.vendorId, request.qno);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
