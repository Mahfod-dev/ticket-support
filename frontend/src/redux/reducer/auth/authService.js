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

			if (response.data) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}

			dispatch(successGlobal('User logged in successfully'));

			return response.data;
		} catch (error) {
			dispatch(errorGlobal(error.response.data.msg));
			return rejectWithValue(error.response.data.msg);
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

			const user = response.data.user;

			thunkAPI.dispatch(successGlobal(`${user} registered successfully`));

			if (response.data) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}

			return response.data;
		} catch (error) {
			thunkAPI.dispatch(errorGlobal(error.response.data.error));
			return thunkAPI.rejectWithValue(error.response.data.error);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	localStorage.removeItem('user');

	return {};
});
	



