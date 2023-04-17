import "./sidebar.scss";
import { Mail, Facebook, Twitter, Google, CloseRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="barrier">
			<div className="mask"></div>
			<div className="sidebar">
				<Link className="button-close" to="/">
					<CloseRounded />
				</Link>
				<div className="container">
					<h2>Welcome back</h2>
					<Link className="button email" to="/register">
						<div className="button-content">
							<Mail fontSize="small" />
							<span>sign in with email</span>
						</div>
					</Link>
					<a href="" className="button facebook">
						<div className="button-content">
							<Facebook fontSize="small" />
							<span>sign in with facebook</span>
						</div>
					</a>
					<a href="" className="button twitter">
						<div className="button-content">
							<Twitter fontSize="small" />
							<span>sign in with twitter</span>
						</div>
					</a>
					<a href="" className="button google">
						<div className="button-content">
							<Google fontSize="small" />
							<span>sign in with google</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
