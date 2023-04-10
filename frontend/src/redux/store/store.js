import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/countSlice';
import authSliceReducer from '../reducer/auth/authSlice';
import notificationSliceReducer from '../reducer/notifications/notificationSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authSliceReducer,
		notification: notificationSliceReducer,
	},
});
