import "./blogger.scss";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export default function Blogger() {
	return (
		<div className="blogger">
			<div className="profile-image">
				<img src="/assets/profileimg.png" alt="" />
			</div>
			<div className="blogger-desc">
				<p>nba blogger</p>
				<h3>Gabie Sheber</h3>
				<span>
					Gabie Sheber Benbow is a theologian, essayist and creative who situates hee work
					at the intersections of beauty, faith, feminism and culture. Gabie Sheber Benbow
					is a theologian, essayist and creative who situates her work at the
					intersections of beauty, faith, feminism and culture. Gabie Sheber Benbow is a
					theologian, essayist and creative who situates her work at the intersections of
					beauty, faith, feminism and culture.
				</span>
				<button className="like">
					<FavoriteBorder sx={{ fontSize: 16 }} />
				</button>
			</div>
		</div>
	);
}
