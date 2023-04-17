import "./story.scss";

export default function Story(prop) {
	const data = prop.data;
	return (
		<div className="Story">
			<img src={data.img} alt="" />
			<div className="story-desc">
				{data.channel ? <p>{data.channel}</p> : <></>}
				<h3>{data.desc}</h3>
				<div className="profile">
					<span>By {data.profile}</span>
					<span className="date">{` • ${data.date}`}</span>
				</div>
			</div>
		</div>
	);
}
