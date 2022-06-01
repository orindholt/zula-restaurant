import Layout from "../templates/Layout";
import MenuSlide from "../components/menu-slide/MenuSlide";

const Home = () => {
	return (
		<Layout className="text-center">
			<h3 className="text-4xl font-bold">Home</h3>
			<h2 className="text-center ">Welcome to Zula</h2>
			<div>
				<img
					className="zula-icon mx-auto mt-4 font-bold"
					src="assets/zula_icon_01.png"
					alt=""
				/>
			</div>
			<h1 className="text-center font-bold text-2xl mt-4">
				Real Teast Real Food
			</h1>
			<p className="text-center mt-4 ">
				Hos Zula kommer du til at opleve mere end blot mad.
			</p>
			<MenuSlide />
		</Layout>
	);
};

export default Home;
