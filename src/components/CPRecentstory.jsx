import "./cprecentstory.scss";
import CPStory from "./CPStory";

export default function CPRecentstory() {
	const list = [
		{
			id: 1,
			img: "/assets/image23.png",
			desc: "Blues must treat Qualifiers like playoffs, Allen says",
			profile: "Gabie Serber",
			date: "March 1, 2022",
		},
		{
			id: 2,
			img: "/assets/image13.png",
			desc: "Pronger leaving role with Panthers",
			profile: "Ben Sundock",
			date: "March 2, 2022",
		},
		{
			id: 3,
			img: "/assets/image11.png",
			desc: "Titans Post Elite PFF Tackling in 2019 Tackling ",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
		{
			id: 4,
			img: "/assets/image17.png",
			desc: "Titans Post Elite PFF Tackling in 2019 Tackling ",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
		{
			id: 5,
			img: "/assets/image18.png",
			desc: "Titans Post Elite PFF Tackling in 2019 Tackling ",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
		{
			id: 6,
			img: "/assets/image15.png",
			desc: "Titans Post Elite PFF Tackling in 2019 Tackling ",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
		{
			id: 7,
			img: "/assets/image19.png",
			desc: "Titans Post Elite PFF Tackling in 2019 Tackling ",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
		{
			id: 8,
			img: "/assets/image20.png",
			desc: "Titans Post Elite PFF Tackling in 2019 Tackling ",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
		{
			id: 9,
			img: "/assets/image21.png",
			desc: "Titans Post Elite PFF Tackling in 2019 Tackling ",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
		{
			id: 10,
			img: "/assets/image22.png",
			desc: "Titans Post Elite PFF Tackling in 2019 Tackling ",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
	];

	return (
		<div className="cprecentstory">
			<div className="story-list">
				{list.map((item) => (
					<CPStory data={item} key={item.id} />
				))}
			</div>
			<a href="" className="button">
				view more posts
			</a>
		</div>
	);
}
