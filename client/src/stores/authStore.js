import axios from "axios";
import { create } from "zustand";

const authStore = create((set) => ({
	loggedIn: null,
	loginForm: {
		email: "",
		password: "",
	},

	signupForm: {
		email: "",
		password: "",
	},

	updateLoginForm: (e) => {
		const { name, value } = e.target;

		set((state) => {
			return {
				loginForm: {
					...state.loginForm,
					[name]: value,
				},
			};
		});

		// const { loginForm } = authStore.getState();
		// set({

		// });
	},

	updateSignupForm: (e) => {
		const { name, value } = e.target;

		set((state) => {
			return {
				signupForm: {
					...state.signupForm,
					[name]: value,
				},
			};
		});

		// const { loginForm } = authStore.getState();
		// set({

		// });
	},

	login: async () => {
		try {
			const { loginForm } = authStore.getState();

			const res = await axios.post("/login", loginForm);

			set({
				loggedIn: true,
				loginForm: {
					email: "",
					password: "",
				},
			});
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	},

	checkAuth: async () => {
		try {
			await axios.get("/check-auth");
			set({ loggedIn: true });
		} catch (err) {
			console.log(err);
			set({ loggedIn: false });
		}
	},

	signup: async () => {
		const { signupForm } = authStore.getState();

		const res = await axios.post("/signup", signupForm);

		set({
			signupForm: {
				email: "",
				password: "",
			},
		});
		console.log(res);
	},

	logout: async () => {
		await axios.get("/logout");
		set({ loggedIn: false });
	},
}));

export default authStore;
