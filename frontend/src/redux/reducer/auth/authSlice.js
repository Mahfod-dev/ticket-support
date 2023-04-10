import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './authService';

const initialState = {
	isAuthenticated: false,
	user: null,
	loading: false,
	error: null,
	message: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.loading = false;
			state.error = null;
			state.message = '';
		});
		builder.addCase(login.rejected, (state, action) => {
			state.isAuthenticated = false;
			state.user = null;
			state.loading = false;
			state.error = action.payload;
			state.message = '';
		});
		builder.addCase(register.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(register.fulfilled, (state, action) => {
			console.log(action.payload);
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.loading = false;
			state.error = null;
			state.message = '';
		});
		builder.addCase(register.rejected, (state, action) => {
			console.log(action);
			state.isAuthenticated = false;
			state.user = null;
			state.loading = false;
			state.error = action.payload;
			state.message = '';
		});
	},
});

// Action creators are generated for each case reducer function

export default authSlice.reducer;
