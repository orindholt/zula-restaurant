import Layout from "../templates/Layout";
import MenuSlide from "../components/menu-slide/MenuSlide";
import GenericButton from "../components/button/GenericButton";

const Home = () => {
	return (
		<Layout className="text-center items-center justify-around bg-[url('/public/assets/header.jpg')] text-white">
			<div>
				<h2 className="text-center text-4xl mt-4 mb-1 font-light font-imbue">
					Welcome to Zula
				</h2>
				<img
					className="zula-icon mx-auto font-bold"
					src="assets/zula_icon_white_01.png"
					alt="Zula Icon"
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
				anchor="/check"
				className="mx-auto mt-4"
			/>
			<MenuSlide />
		</Layout>
	);
};

export default Home;
