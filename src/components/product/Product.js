import { AnimatePresence, motion as m } from "framer-motion";
import { useContext, useState } from "react";
import { cartContext } from "../../util/cartContext";
import createNotification from "../../util/createNotification";
import GenericButton from "../button/GenericButton";
import LightBox from "./LightBox";

const Product = ({ product }) => {
	const [lightBox, setLightBox] = useState(false);
	const { contents, setContents } = useContext(cartContext);
	const { name, price, image } = product.acf;
	const { category } = product;

	const productVariant = {
		hidden: { y: -40, opacity: 0 },
		shown: { y: 0, opacity: 1, transition: { duration: 0.5, type: "easeOut" } },
	};

	const toggleLightBox = () => {
		setLightBox(!lightBox);
	};

	const addToCart = (product) => {
		setContents(contents.length ? [...contents, product] : [product]);
		createNotification("success", `${name} was added to the cart!`);
	};

	return (
		<>
			<AnimatePresence>
				{lightBox && (
					<LightBox
						product={product}
						addFunc={addToCart}
						toggleFunc={toggleLightBox}
					/>
				)}
			</AnimatePresence>
			<m.li variants={productVariant} className="flex flex-col">
				<h3 className="font-bold text-xl leading-6">{name}</h3>
				{category && <p className="text-sm">{category}</p>}
				<p className="mb-auto pb-2">
					{String(parseInt(price).toFixed(2)).replace(".", ",")} DKK
				</p>
				<div className="flex flex-col gap-2">
					<img
						src={image}
						alt={name}
						className="rounded-sm shadow-lg cursor-pointer"
						onClick={toggleLightBox}
					/>
					<GenericButton
						caption="Add to cart"
						click={() => addToCart(product)}
					/>
				</div>
			</m.li>
		</>
	);
};

export default Product;
