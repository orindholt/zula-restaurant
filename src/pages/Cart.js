import { useContext, useState, useEffect } from "react";
import GenericButton from "../components/button/GenericButton";
import CartProduct from "../components/cart/CartProduct";
import Layout from "../templates/Layout";
import { cartContext } from "../util/cartContext";
import { motion as m } from "framer-motion";

const Cart = () => {
	const { contents, setContents } = useContext(cartContext);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let sum = 0;
		contents.forEach((product) => (sum += parseInt(product.acf.price)));
		setTotalPrice(sum);
	}, [contents]);

	const tableVariant = {
		hidden: { opacity: 0 },
		shown: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	return (
		<Layout>
			<h1 className="text-4xl font-bold text-center">Cart</h1>
			{!contents.length ? (
				<div className="flex flex-col items-center gap-4 mt-10">
					<h3 className="text-center text-2xl font-bold">
						There doesn't seem to be anything in your cart
					</h3>
					<div className="flex flex-col items-center gap-1">
						<p className="text-center">Order some at:</p>
						<GenericButton
							caption="Menu"
							anchor="/menu"
							className="max-w-fit"
						/>
					</div>
				</div>
			) : (
				<>
					<m.table
						variants={tableVariant}
						initial="hidden"
						animate="shown"
						className="border-separate border-spacing-y-1"
					>
						<tbody>
							{contents.map((product, i) => {
								return <CartProduct product={product} key={i} />;
							})}
						</tbody>
					</m.table>
					<hr className="border-black my-4" />
					<p className="text-xl text-right">Total: {totalPrice} kr</p>
					<GenericButton
						caption="Checkout"
						anchor="/check"
						className="max-w-fit"
					/>
				</>
			)}
		</Layout>
	);
};

export default Cart;
