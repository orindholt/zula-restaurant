import Loader from "../components/loader/Loader";
import Product from "../components/product/Product";
import useDbFetch from "../hooks/useDbFetch";
import Layout from "../templates/Layout";
import { motion as m } from "framer-motion";
import GenericButton from "../components/button/GenericButton";

const Menu = () => {
	const data = useDbFetch();

	const categories = useDbFetch("categories");

	const refreshProducts = () => {
		localStorage.clear();
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	};

	const menuListVariant = {
		hidden: { opacity: 0 },
		shown: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	return (
		<Layout className="text-center">
			<h1 className="text-4xl font-bold">Menu</h1>
			{data && categories ? (
				<m.ul
					variants={menuListVariant}
					initial="hidden"
					animate="shown"
					className="grid grid-cols-2 md:grid-cols-3 grid-rows-1fr gap-6 md:gap-5 lg:gap-7 xl:gap-10 mt-6"
				>
					{data.map((product, i) => {
						return (
							<Product
								product={{
									...product,
									category: product.categories
										? categories[product.categories[0]].name
										: null,
								}}
								key={i}
							/>
						);
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
