import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetAuthAPI, GetLoggedUserAPI, LogoutUserAPI } from "../../service/apiMethods";

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

  export const getLoggedUser = createAsyncThunk(
    "auth/getloggeduser",
    async (token : string,{ rejectWithValue, getState }) => {
      try {
        const res = await GetLoggedUserAPI(token);
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const logout = createAsyncThunk(
    "auth/logout",
    async (_,{ rejectWithValue, getState }) => {
      try {
        const res = await LogoutUserAPI();
        return res.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
