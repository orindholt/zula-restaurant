import Layout from "../templates/Layout";
import MenuSlide from "../components/menu-slide/MenuSlide";

const Home = () => {
	return (
		<Layout className="text-center">
			<h1 className="text-4xl font-bold">Home</h1>
			<MenuSlide />
		</Layout>
	);
};

export default Home;
