import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin } from "../../typings/interfaces/ILogin";
import { GetAuthAPI } from "../../service/apiMethods";

export const authenticate = createAsyncThunk(
    "auth/authenticate",
    async (request : any,{ rejectWithValue, getState }) => {
      try {
        const res = await GetAuthAPI(request);
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
