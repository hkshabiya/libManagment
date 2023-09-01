import { PhotoSizeSelectLargeTwoTone } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const signupUser = createAsyncThunk("signUpUser", async () => {
  try{
    const res = await axios.post(`http://127.0.0.1:8000/auth/signup/`);
    console.log('ee', res.data);
    return res.data
  }catch (error){

      console.log('ss', error.responce);
      return error.responce
  }
});

const signupSlice = createSlice({
  name: "signUp",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    userToken:null,
    serverErrors:{}
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(signupUser.rected, (state, action) => {
      state.isError = true;
      console.log('action', action);
      // state.serverErrors=action.
    });
  },
});

export default signupSlice.reducer;
