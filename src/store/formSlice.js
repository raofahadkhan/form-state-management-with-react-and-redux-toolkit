import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
	name: "form",
	initialState: {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		phoneNumber: "",
		age: "",
	},
	reducers: {
		firstName: (state, action) => {
			firstName: action.payload;
		},
		lastName: (state, action) => {
			lastName: action.payload;
		},
		email: (state, action) => {
			email: action.payload;
		},
		password: (state, action) => {
			password: action.payload;
		},
		phoneNumber: (state, action) => {
			phoneNumber: action.payload;
		},
		age: (state, action) => {
			age: action.payload;
		},
		reset: (state, action) => {
			return {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				phoneNumber: "",
				age: "",
			};
		},
	},
});

export const {
	firstName,
	lastName,
	email,
	password,
	phoneNumber,
	age,
	reset,
} = formSlice.actions;

export default formSlice.reducer;
