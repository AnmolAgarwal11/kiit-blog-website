import Login from "./pages/Login/Login";
import SecondaryLogin from "./pages/Login/SecondaryLogin";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import TopPage from "./pages/TopPage/TopPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
	const user = false;
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<SecondaryLogin />} />
					<Route path="/top" element={<TopPage />} />
					<Route path="/category" element={<CategoryPage />} />
				</Routes>
			</Router>
		</div>
	);
}
