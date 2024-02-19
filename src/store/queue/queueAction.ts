import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetAllReservations,
  GetCurrentServingNum,
  GetNextNum,
  GetUserCurrentReservation,
  ReserveQueue,
} from "../../service/apiMethods";

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

export const reserveQueue = createAsyncThunk(
  "vendor/reserveQueue",
  async (request: any, { rejectWithValue, getState }) => {
    try {
      const res = await ReserveQueue(request);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserCurrentReservation = createAsyncThunk(
  "vendor/getUserCurrentReservation",
  async (request: any, { rejectWithValue, getState }) => {
    try {
      const res = await GetUserCurrentReservation(request);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllReservations = createAsyncThunk(
  "vendor/getAllReservations",
  async (userId: number, { rejectWithValue, getState }) => {
    try {
      const res = await GetAllReservations(userId);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
