import "./cpstorycard.scss";

export default function CPStorycard(prop) {
	const data = prop.data;
	return (
		<div className="cpstorycard">
			<img src={data.img} alt="" />
			<div className="story-desc">
				<h2>{data.desc}</h2>
				<div className="profile">
					<img src="/assets/profileimg.png" alt="" />
					<span>by gabie serber</span>
					<span className="date"> • </span>
					<span className="date"> march 28, 2022</span>
				</div>
			</div>
		</div>
	);
}
