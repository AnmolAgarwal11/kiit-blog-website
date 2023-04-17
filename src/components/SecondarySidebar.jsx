import "./secondarysidebar.scss";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";

export default function SecondarySidebar() {
	return (
		<div className="sec-barrier">
			<div className="mask"></div>
			<div className="sidebar">
				<Link className="button-close" to="/">
					<CloseRounded />
				</Link>
				<div className="container">
					<div className="headings">
						<h2>Welcome back</h2>
						<span>Enter your email and we will send</span>
						<br />
						<span>you a Sign In link.</span>
					</div>
					<div className="email-container">
						<div className="mail">
							<form action="">
								<input type="email" name="" id="" placeholder="Your Email" />
							</form>
						</div>
						<a href="" className="send-button">
							send me the link
						</a>
					</div>
					<a href="" className="back-button">
						Go back to sign in options
					</a>
				</div>
			</div>
		</div>
	);
}
