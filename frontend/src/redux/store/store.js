import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/countSlice';
import authSliceReducer from '../reducer/authSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authSliceReducer,
	},
});
