import { configureStore } from '@reduxjs/toolkit';
import signupSlice from './slice/signupSlice';


export const store = configureStore({
    reducer:{
        signupUser: signupSlice
    }
});