import React from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

function SignupForm() {
	const navigate = useNavigate();
	const store = authStore();

	async function handleSignup(e) {
		e.preventDefault();
		await store.signup();
		navigate("/login");
	}

	return (
		<form onSubmit={handleSignup}>
			<label>Email </label>
			<input
				type="email"
				name="email"
				value={store.signupForm.email}
				onChange={store.updateSignupForm}
			/>
			<br />
			<br />
			<label>Password</label>
			<input
				type="password"
				name="password"
				value={store.signupForm.password}
				onChange={store.updateSignupForm}
			/>
			<button type="submit">Signup</button>
		</form>
	);
}

export default SignupForm;
