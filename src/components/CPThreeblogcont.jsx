import "./cpthreeblogcont.scss";
import CPThreeblog from "./CPThreeblog";

export default function CPThreeblogcont() {
	const list = [
		{
			id: 1,
			img: "/assets/image10.png",
			title: "Pietrangelo hopes he'll sign contract to remain with Blues",
			profile: "Gabie Serber",
			date: "March 1, 2022",
		},
		{
			id: 2,
			img: "/assets/image11.png",
			title: "Boeser says report of potential trade from Canucks 'really unnecessary'",
			profile: "Ben Sundock",
			date: "March 2, 2022",
		},
		{
			id: 3,
			img: "/assets/image12.png",
			channel: "nba",
			title: "Training camp preview: Rookies under the radar entering Qualifiers",
			profile: "Gabie Serber",
			date: "March 3, 2022",
		},
	];

	return (
		<div className="cpthreeblogcont">
			<div className="container">
				{list.map((item) => (
					<CPThreeblog data={item} key={item.id} />
				))}
			</div>
		</div>
	);
}
