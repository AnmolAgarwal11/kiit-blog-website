import "./tpblog.scss";

export default function TPBlog(prop) {
	const data = prop.data;
	return (
		<div className="tpblog">
			<img src={data.img} alt="" />
			<div className="blog-desc">
				<h3>{data.desc}</h3>
				<div className="profile">
					<img src={data.profileimg} alt="" />
					<span>By {data.profile}</span>
					<span className="date">{`•`}</span>
					<span className="date">{`${data.date}`}</span>
				</div>
			</div>
		</div>
	);
}
