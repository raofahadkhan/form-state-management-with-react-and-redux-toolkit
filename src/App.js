import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
	age,
	email,
	firstName,
	lastName,
	password,
	phoneNumber,
	reset,
} from "./store/formSlice";
import FormDisplay from "./FormDisplay";

function App() {
	const state = useSelector((state) => {
		return state;
	});
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(reset());
		e.target.reset();
	};
	return (
		<div className="App">
			<h3>Form State Management With React And Redux Tookit</h3>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="firstName">First Name: </label>
				<input
					type="text"
					id="firstName"
					placeholder="Enter Your First Name"
					value={state.firstName}
					name="firstName"
					onChange={(e) => dispatch(firstName(e.target.value))}
					required
				/>
				<br />
				<br />
				<label htmlFor="lastName">Last Name: </label>
				<input
					type="text"
					id="lastName"
					placeholder="Enter Your Last Name"
					name="lastName"
					value={state.lastName}
					onChange={(e) => dispatch(lastName(e.target.value))}
					required
				/>
				<br />
				<br />
				<label htmlFor="email">E-mail: </label>
				<input
					type="email"
					id="email"
					placeholder="Enter Your email"
					name="email"
					value={state.email}
					onChange={(e) => dispatch(email(e.target.value))}
					required
				/>
				<br />
				<br />
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					id="password"
					placeholder="Enter Your Password"
					name="password"
					value={state.password}
					onChange={(e) => dispatch(password(e.target.value))}
					required
				/>
				<br />
				<br />
				<label htmlFor="age">Age: </label>
				<input
					type="text"
					id="age"
					placeholder="Enter Your Age"
					name="age"
					value={state.age}
					onChange={(e) => dispatch(age(e.target.value))}
					required
				/>
				<br />
				<br />
				<label htmlFor="phoneNumber">Phone Number: </label>
				<input
					type="text"
					id="phoneNumber"
					placeholder="Enter Your Phone Number"
					name="phoneNumber"
					value={state.phoneNumber}
					onChange={(e) => dispatch(phoneNumber(e.target.value))}
					required
				/>
				<br />
				<br />
				<input type="submit" value="Submit" />
			</form>
			<b>
				<FormDisplay />
			</b>
		</div>
	);
}

export default App;
