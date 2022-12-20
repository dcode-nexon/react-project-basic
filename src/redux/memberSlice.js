import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMembers = createAsyncThunk('member/requestMembers', async () => {
	const url = `${process.env.PUBLIC_URL}/DB/members.json`;
	const response = await axios.get(url);
	return response.data.members;
});

const memberSlice = createSlice({
	name: 'members',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchMembers.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchMembers.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchMembers.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default memberSlice.reducer;
