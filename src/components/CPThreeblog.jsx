import "./cpthreeblog.scss";

export default function CPThreeblog(prop) {
	const data = prop.data;
	return (
		<div className="cpthreeblog">
			<img src={data.img} alt="" />
			<div className="blog-desc">
				<h3>{data.title}</h3>
				{data.desc ? <p>{data.desc}</p> : <></>}
				<div className="profile">
					<span>By {data.profile}</span>
					<span className="date"> • </span>
					<span className="date">{data.date}</span>
				</div>
			</div>
		</div>
	);
}
