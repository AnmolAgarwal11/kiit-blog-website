import TopbarLight from "../../components/TopbarLight";
import TopPageHeader from "../../components/TPHeader";
import TPBlogcontainer from "../../components/TPBlogcontainer";
import Startblog from "../../components/Startblog";
import Footer from "../../components/Footer";

export default function TopPage() {
	return (
		<div className="toppage">
			<TopbarLight />
			<TopPageHeader />
			<TPBlogcontainer />
			<Startblog />
			<Footer />
		</div>
	);
}
