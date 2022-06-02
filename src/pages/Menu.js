import Loader from "../components/loader/Loader";
import Product from "../components/product/Product";
import useFetchProduct from "../hooks/useFetchProduct";
import Layout from "../templates/Layout";
import { motion as m } from "framer-motion";
import GenericButton from "../components/button/GenericButton";

const Menu = () => {
	const data = useFetchProduct();

	const refreshProducts = () => {
		localStorage.removeItem("data");
		window.location.reload();
	};

	const menuListVariant = {
		hidden: { opacity: 0 },
		shown: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	return (
		<Layout className="text-center">
			<h1 className="text-4xl font-bold">Menu</h1>
			{data ? (
				<m.ul
					variants={menuListVariant}
					initial="hidden"
					animate="shown"
					className="grid grid-cols-2 md:grid-cols-3 grid-rows-1fr gap-6 md:gap-5 lg:gap-7 xl:gap-10 mt-6"
				>
					{data.map((product, i) => {
						return <Product product={product.acf} key={i} />;
					})}
				</m.ul>
			) : (
				<Loader />
			)}
			<GenericButton
				className="mt-10 max-w-fit mx-auto text-sm"
				caption="Refresh Products"
				click={refreshProducts}
			/>
		</Layout>
	);
};

export default Menu;
