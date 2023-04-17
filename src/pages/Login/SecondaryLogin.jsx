import "./secondarylogin.scss";
import Topbar from "../../components/Topbar";
import Hero from "../../components/Hero";
import SecondarySidebar from "../../components/SecondarySidebar";

export default function SecondaryLogin() {
	return (
		<div className="secondary-login">
			<Topbar />
			<Hero />
			<SecondarySidebar />
		</div>
	);
}
