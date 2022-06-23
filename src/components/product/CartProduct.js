import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { cartContext } from "../../util/cartContext";
import { motion as m } from "framer-motion";
import createNotification from "../../util/createNotification";
import { IoAdd, IoRemove } from "react-icons/io5";

const CartProduct = ({ product }) => {
	const { contents, setContents } = useContext(cartContext);
	const { name, price, image } = product.acf;
	const { category } = product;

	const removeItem = () => {
		setContents(contents.filter((p) => p.id !== product.id));
		createNotification("error", `${name} was removed from the cart!`);
	};

	const adjustProductAmount = (increment = true) => {
		if (increment) {
			setContents([...contents, product]);
		} else if (!increment) {
			setContents(
				contents.filter(
					(el, i) => i !== contents.findIndex((el) => el.id === product.id)
				)
			);
		}
	};

	const rowVariant = {
		hidden: { x: -20, opacity: 0 },
		shown: { x: 0, opacity: 1 },
	};

	return (
		<m.tr variants={rowVariant}>
			<td
				className="text-4xl text-red-normal cursor-pointer"
				onClick={removeItem}
			>
				<IoClose />
			</td>
			<td className="w-1/4">
				<img src={image} alt={name} />
			</td>
			<th>
				<h3 className="font-bold text-xl">{name}</h3>
			</th>
			<td>
				<p>{category}</p>
			</td>
			<td>
				<div className="flex justify-center max-w-fit rounded-sm bg-black text-white">
					<button
						className="flex justify-center items-center p-0.5 text-green-normal"
						type="button"
						onClick={() => adjustProductAmount(true)}
					>
						{<IoAdd />}
					</button>
					<p className="flex justify-center  items-center px-2 border-x border-solid border-x-tan">
						{contents.filter((p) => p.id === product.id).length}
					</p>
					<button
						className="flex justify-center items-center p-0.5 text-red-normal"
						type="button"
						onClick={() => adjustProductAmount(false)}
					>
						{<IoRemove />}
					</button>
				</div>
			</td>
			<td>
				<p>{price} kr</p>
			</td>
		</m.tr>
	);
};

export default CartProduct;
