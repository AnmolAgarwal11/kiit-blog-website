import "./login.scss";
import Topbar from "../../components/Topbar";
import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";

export default function Login() {
	return (
		<div className="loginpage">
			<Topbar />
			<Hero />
			<Sidebar />
		</div>
	);
}
