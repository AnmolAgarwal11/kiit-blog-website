import "./topbarlight.scss";
import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function TopbarLight() {
	const user = false;
	return (
		<div className="topbarlight">
			<div className="logo">
				<img src="/assets/logolight.png" alt="" />
			</div>
			<div className="categories">
				<a href="">nba</a>
				<a href="">nfl</a>
				<a href="">nhl</a>
				<a href="">mlb</a>
				<a href="">soccer</a>
				<a href="">fantasy</a>
				<a href="">nascar</a>
			</div>
			<div className="search">
				<a href="">
					<Search />
				</a>
				<Link className="signin-button" to="/login">
					log {user ? "out" : "in"}
				</Link>
			</div>
		</div>
	);
}
