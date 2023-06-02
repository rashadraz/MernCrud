import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import Logout from "../pages/Logout";

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/signup">Register</Link>
						</li>
						<li>
							<Link to="/logout">Logout</Link>
						</li>
					</ul>
					<Routes>
						<Route
							index
							element={
								<RequireAuth>
									<NotesPage />
								</RequireAuth>
							}
						/>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route path="/logout" element={<Logout />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
