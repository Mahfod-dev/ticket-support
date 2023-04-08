import { createAsyncThunk } from "@reduxjs/toolkit";


export const login = createAsyncThunk(
    "auth/login",
    async (data,thunkAPI) => {
        console.log(data);
        // try {
        //     const response = await fetch('/api/v1/users/login', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(data),
		// 	});
        //     const result = await response.json();
        //     return result;
        // } catch (error) {
        //     return thunkAPI.rejectWithValue(error);
        // }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (data, thunkAPI) => {
  
        try {
            const response = await fetch(
				'http://localhost:3000/api/v1/users/register',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			);
            console.log(response)
            const result = await response.json();
            console.log(result)
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


