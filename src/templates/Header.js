import InfoBar from "../components/nav/info-bar/InfoBar";
import Navbar from "../components/nav/navbar/Navbar";

const Header = () => {
	return (
		<header className="fixed w-full top-0 z-50">
			<InfoBar />
			<Navbar />
		</header>
	);
};

export default Header;
