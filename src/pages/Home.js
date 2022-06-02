import Layout from "../templates/Layout";
import MenuSlide from "../components/menu-slide/MenuSlide";
import GenericButton from "../components/button/GenericButton";
const Home = () => {
	return (
		<Layout className="text-center items-center justify-around">
			<h2 className="text-center text-lg mt-4 font-light">Welcome to Zula</h2>
			<div>
				<img
					className="zula-icon mx-auto font-bold"
					src="assets/zula_icon_01.png"
					alt=""
				/>
			</div>
			<div>
				<h1 className="text-center font-bold text-2xl mt-4">
					Real Teast Real Food
				</h1>
				<p className="text-center">
					Hos Zula kommer du til at opleve mere end blot mad.
				</p>
			</div>
			<GenericButton
				caption="Book a table"
				anchor="/"
				className="mx-auto mt-4"
			/>
			<MenuSlide />
		</Layout>
	);
};

export default Home;
