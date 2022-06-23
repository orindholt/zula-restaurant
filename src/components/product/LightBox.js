import { motion as m } from "framer-motion";
import GenericButton from "../button/GenericButton";

const lightBoxVariant = {
	hidden: { opacity: 0 },
	shown: { opacity: 1 },
};

const productVariant = {
	hidden: { scale: 0.1 },
	shown: { scale: 1 },
};

const LightBox = ({ product, addFunc, toggleFunc }) => {
	const { name, price, image, desc } = product.acf;
	const { category } = product;
	return (
		<m.aside
			variants={lightBoxVariant}
			initial="hidden"
			animate="shown"
			exit="hidden"
			transition={{ duration: 0.1 }}
			onClick={toggleFunc}
			className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-80 backdrop-blur-md z-50 grid place-content-center px-3"
		>
			<m.div variants={productVariant} className="flex gap-4">
				<img className="rounded-md shadow-sm" src={image} alt={name} />
				<div className="text-white flex flex-col gap-2 text-left">
					<h2 className="text-6xl font-bold">{name}</h2>
					<p className="max-w-sm">{desc}</p>
					<p>{category}</p>
					<hr />
					<p className="text-2xl">{price} kr.</p>
					<GenericButton
						caption="Add to cart"
						className="mt-auto text-2xl"
						click={() => addFunc(product)}
					/>
				</div>
			</m.div>
		</m.aside>
	);
};

export default LightBox;
