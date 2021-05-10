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
			return {
				...state,
				firstName: action.payload,
			};
		},
		lastName: (state, action) => {
			return { ...state, lastName: action.payload };
		},
		email: (state, action) => {
			return { ...state, email: action.payload };
		},
		password: (state, action) => {
			return { ...state, password: action.payload };
		},
		phoneNumber: (state, action) => {
			return { ...state, phoneNumber: action.payload };
		},
		age: (state, action) => {
			return { ...state, age: action.payload };
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
