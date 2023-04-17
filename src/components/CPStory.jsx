import "./cpstory.scss";

export default function CPStory(prop) {
	const data = prop.data;
	return (
		<div className="cpstory">
			<img src={data.img} alt="" />
			<div className="story-desc">
				<h3>{data.desc}</h3>
				<div className="profile">
					<span>by {data.profile}</span>
					<span className="date"> • </span>
					<span className="date">{data.date}</span>
				</div>
			</div>
		</div>
	);
}
