import "./hero.scss";

export default function Hero() {
	return (
		<div className="hero">
			<div className="focus">
				<span>
					<h1>Share or discover</h1>
					<h1>the best sports content</h1>
				</span>
				<a href="" className="button">
					Start a sportsblog
				</a>
			</div>
			<div className="group">
				<img src="/assets/mask-group.png" alt="" />
			</div>
		</div>
	);
}
