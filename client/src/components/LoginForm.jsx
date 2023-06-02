import React from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const navigate = useNavigate();
	const store = authStore();

	const handleLogin = async (e) => {
		e.preventDefault();
		const res = await store.login();

		//navigate to protected route
		navigate("/");
	};
	return (
		<form onSubmit={handleLogin}>
			<label>Email </label>
			<input
				type="email"
				name="email"
				value={store.loginForm.email}
				onChange={store.updateLoginForm}
			/>
			<br />
			<br />
			<label>Password</label>
			<input
				type="password"
				name="password"
				value={store.loginForm.password}
				onChange={store.updateLoginForm}
			/>
			<button type="submit">Login</button>
		</form>
	);
}

export default LoginForm;
