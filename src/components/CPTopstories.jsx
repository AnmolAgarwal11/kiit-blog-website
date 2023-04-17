import "./cptopstories.scss";
import CPStorycard from "./CPStorycard";
import CPStory from "./CPStory";

export default function CPTopstories() {
	const card = {
		id: 1,
		img: "/assets/image16.png",
		desc: "Training camp preview: Rookies under the radar entering Qualifiers",
		profile: "Gabie Serber",
		date: "March 1, 2022",
	};
	const list = [
		{
			id: 1,
			img: "/assets/image13.png",
			desc: "Blues must treat Qualifiers like playoffs, Allen says",
			profile: "Gabie Serber",
			date: "March 1, 2022",
		},
		{
			id: 2,
			img: "/assets/image14.png",
			desc: "Pronger leaving role with Panthers",
			profile: "Ben Sundock",
			date: "March 2, 2022",
		},
		{
			id: 3,
			img: "/assets/image15.png",
			desc: "Titans Post Elite PFF Tackling in 2019 Tackling ",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
	];

	return (
		<div className="cptopstories">
			<div className="story-holder">
				<CPStorycard data={card} key={card.id} />
				<div className="story-list">
					{list.map((item) => (
						<CPStory data={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
}
