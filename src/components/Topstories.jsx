import "./topstories.scss";
import Story from "./Story";

export default function Topstories() {
	const list = [
		{
			id: 1,
			img: "/assets/image1.png",
			channel: "nhl",
			desc: "Stanley Cup Playoffs format, qualification system Stanley Cup",
			profile: "Gabie Serber",
			date: "March 1, 2022",
		},
		{
			id: 2,
			img: "/assets/image2.png",
			channel: "nfl",
			desc: "Titans Post Elite PFF Tackling in 2019",
			profile: "Ben Sundock",
			date: "March 2, 2022",
		},
		{
			id: 3,
			img: "/assets/image3.png",
			channel: "nba",
			desc: "Titans Post Elite PFF Tackling in 2019",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
		{
			id: 4,
			img: "/assets/image4.png",
			channel: "soccer",
			desc: "Titans Post Elite PFF Tackling in 2019",
			profile: "Ben Sundock",
			date: "March 4, 2022",
		},
	];

	return (
		<div className="topstories">
			<div className="navbar">
				<div className="heading">
					<p>Featured</p>
					<h1>Top Stories</h1>
				</div>
				<div className="navlinks">
					<ul>
						<li>
							<a href="" className="button active">
								All
							</a>
						</li>
						<li>
							<a href="" className="button">
								nba
							</a>
						</li>
						<li>
							<a href="" className="button">
								nfl
							</a>
						</li>
						<li>
							<a href="" className="button">
								mlb
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="story-holder">
				<div className="story-card">
					<img src="/assets/card-img.png" alt="" />
					<div className="story-desc">
						<p>post of the day</p>
						<h2>
							Melvin Gordon is making the right decision walking away from the
							Chargers
						</h2>
						<div className="profile">
							<img src="/assets/profileimg.png" alt="" />
							<span>by gabie serber</span>
							<span className="date"> • </span>
							<span className="date"> march 28, 2022</span>
						</div>
					</div>
				</div>
				<div className="story-list">
					{list.map((item) => (
						<Story data={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
}
