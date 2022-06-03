import { useContext, useState, useEffect } from "react";
import GenericButton from "../components/button/GenericButton";
import CartProduct from "../components/cart/CartProduct";
import Layout from "../templates/Layout";
import { cartContext } from "../util/cartContext";

const Cart = () => {
	const { contents, setContents } = useContext(cartContext);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let sum = 0;
		contents.forEach((product) => (sum += parseInt(product.acf.price)));
		setTotalPrice(sum);
	}, [contents]);

	return (
		<Layout>
			<h1 className="text-4xl font-bold text-center">Cart</h1>
			{!contents.length ? (
				<p className="text-center">There doesn't seem to be any items</p>
			) : (
				<>
					<table className="border-collapse">
						{contents.map((product, i) => {
							return <CartProduct product={product} key={i} />;
						})}
					</table>
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
