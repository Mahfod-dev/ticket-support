import {createSlice} from '@reduxjs/toolkit';
import {login,register} from '../reducer/authService';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null,
    message:'',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login: (state, action) => {
        //     state.isAuthenticated = true;
        //     state.user = action.payload.user;
        //     state.token = action.payload.token;
        //     state.loading = false;
        //     state.error = null;
        //     state.message = '';
        // }
    },
    extraReducers: {
     [login.pending]: (state) => {
         state.loading = true;
      }
    },
    [login.fulfilled]: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
        state.message = '';
    },
    [login.rejected]: (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.loading = false;
        state.error = action.payload;
        state.message = '';
    },
    [register.pending]: (state) => {
        state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
        state.message = '';
    },
    [register.rejected]: (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.loading = false;
        state.error = action.payload;
        state.message = '';
    },



});

// Action creators are generated for each case reducer function

export default authSlice.reducer;
