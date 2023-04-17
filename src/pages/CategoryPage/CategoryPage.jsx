import "./categorypage.scss";
import TopbarLight from "../../components/TopbarLight";
import CPTeambrand from "../../components/CPTeambrand";
import CPTopstories from "../../components/CPTopstories";
import CPTopstories2 from "../../components/CPTopstories2";
import CPThreeblogcont from "../../components/CPThreeblogcont";
import CPRecentstory from "../../components/CPRecentstory";
import Startblog from "../../components/Startblog";
import Footer from "../../components/Footer";

export default function CategoryPage() {
	return (
		<div className="categorypage">
			<TopbarLight />
			<CPTeambrand />
			<CPTopstories />
			<hr />
			<CPTopstories2 />
			<hr />
			<CPThreeblogcont />
			<hr />
			<CPRecentstory />
			<hr />
			<Startblog />
			<Footer />
		</div>
	);
}
