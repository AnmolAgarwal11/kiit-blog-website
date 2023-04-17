import Topbar from "../../components/Topbar";
import Hero from "../../components/Hero";
import Topstories from "../../components/Topstories";
import Featuredbloggers from "../../components/Featuredbloggers";
import Startblog from "../../components/Startblog";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";

export default function HomePage() {
	return (
		<div className="homepage">
			<Topbar />
			<Hero />
			<Topstories />
			<Featuredbloggers />
			<Startblog />
			<Subscribe />
			<Footer />
		</div>
	);
}
