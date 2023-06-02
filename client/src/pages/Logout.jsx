import React, { useEffect } from "react";
import authStore from "../stores/authStore";

function Logout() {
	const store = authStore();
	useEffect(() => {
		store.logout();
	}, []);

	return <h1>You are now logged out</h1>;
}

export default Logout;
