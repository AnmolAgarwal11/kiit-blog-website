import "./featuredbloggers.scss";
import Blogger from "./Blogger";

export default function Featuredbloggers() {
	return (
		<div className="featuredbloggers">
			<div className="blogger-container">
				<div className="navbar">
					<div className="heading">
						<p>Read the best</p>
						<h1>Featured Bloggers</h1>
					</div>
				</div>
				<div className="blog-holder">
					<Blogger />
					<Blogger />
					<Blogger />
					<Blogger />
					<Blogger />
					<Blogger />
				</div>
			</div>
		</div>
	);
}
