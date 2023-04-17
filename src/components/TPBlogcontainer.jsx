import TPBlog from "./TPBlog";
import "./tpblogcontainer.scss";

export default function TPBlogcontainer() {
	const list = [
		{
			id: 1,
			img: "/assets/image5.png",
			desc: "The 2020 Daytona 500 is upon us, Here's a guide to the race",
			profileimg: "/assets/profileimg.png",
			profile: "Ben Sundock",
			date: "March 1, 2022",
		},
		{
			id: 2,
			img: "/assets/image6.png",
			desc: "Dale Earnhardt Jr And Family Thankful To Be Alive After Plane Crash.",
			profileimg: "/assets/profileimg.png",
			profile: "Ben Sundock",
			date: "March 2, 2022",
		},
		{
			id: 3,
			img: "/assets/image7.png",
			desc: "Just How Does a NASCAR Pit Crew Work?",
			profileimg: "/assets/profileimg.png",
			profile: "Ben Sundock",
			date: "March 3, 2022",
		},
		{
			id: 4,
			img: "/assets/image8.png",
			desc: "Kurt Busch savors brother’s accomplishment, aims for more after placing sixth",
			profileimg: "/assets/profileimg.png",
			profile: "Ben Sundock",
			date: "March 4, 2022",
		},
		{
			id: 5,
			img: "/assets/image9.png",
			desc: "Daily Fantasy NASCAR - DraftKings Average Points on Intermediate Tracks",
			profileimg: "/assets/profileimg.png",
			profile: "Ben Sundock",
			date: "March 5, 2022",
		},
		{
			id: 6,
			img: "/assets/image7.png",
			desc: "Just How Does a NASCAR Pit Crew Work?",
			profileimg: "/assets/profileimg.png",
			profile: "Ben Sundock",
			date: "March 6, 2022",
		},
	];

	return (
		<div className="tpblogconatiner">
			{list.map((item) => (
				<TPBlog data={item} key={item.id} />
			))}
			<a href="" className="button">
				view more posts
			</a>
		</div>
	);
}
