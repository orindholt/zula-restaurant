import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import GenericButton from "../button/GenericButton";

const Product = ({ product }) => {
	const { name, price, image } = product;
	const productVariant = {
		hidden: { y: -40, opacity: 0 },
		shown: { y: 0, opacity: 1, transition: { duration: 0.5, type: "easeOut" } },
	};

	return (
		<m.li
			variants={productVariant}
			className="flex flex-col gap-2 justify-between"
		>
			<Link className="flex flex-col h-full" to="/">
				<h3 className="font-bold text-xl leading-6">{name}</h3>
				<p className="mb-auto pb-2">
					{String(parseInt(price).toFixed(2)).replace(".", ",")} DKK
				</p>
				<img src={image} alt={name} className="rounded-sm shadow-lg" />
			</Link>
			<GenericButton caption="Add to cart" />
		</m.li>
	);
};

export default Product;
