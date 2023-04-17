import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import "./footer.scss";

export default function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="links">
					<a href="">about</a>
					<a href="">contact us</a>
					<a href="">help</a>
					<a href="">legal</a>
					<a href="">store</a>
				</div>

				<div className="social">
					<a href="">
						<Instagram fontSize="large" />
					</a>
					<a href="">
						<Facebook fontSize="large" />
					</a>
					<a href="">
						<Twitter fontSize="large" />
					</a>
				</div>

				{/* <div className="spacer"></div> */}
				<div className="copyrights">© 2020 Sportsblog.com A GoBlog Site</div>
			</div>
		</div>
	);
}
