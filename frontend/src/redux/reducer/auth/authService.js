import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
	errorGlobal,
	successGlobal,
} from '../../reducer/notifications/notificationSlice';

export const login = createAsyncThunk(
	'auth/login',
	async (data, { dispatch, rejectWithValue }) => {
		console.log(data);
		try {
			const response = await axios.post(
				'http://localhost:3000/api/v1/users/login',
				data
			);

			dispatch(successGlobal('User logged in successfully'));

			return response.data;
		} catch (error) {
			console.log(error.response.data.error);
			dispatch(errorGlobal(error.response.data.error));
			return rejectWithValue(error.response.data.error);
		}
	}
);

export const register = createAsyncThunk(
	'auth/register',
	async (data, thunkAPI) => {
		try {
			const response = await axios.post(
				'http://localhost:3000/api/v1/users/register',
				data
			);

			thunkAPI.dispatch(successGlobal('User registered successfully'));

			return response.data;
		} catch (error) {
			thunkAPI.dispatch(errorGlobal(error.response.data.error));
			return thunkAPI.rejectWithValue(error.response.data.error);
		}
	}
);
