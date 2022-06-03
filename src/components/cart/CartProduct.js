import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { cartContext } from "../../util/cartContext";
import { motion as m } from "framer-motion";

const CartProduct = ({ product }) => {
	const { contents, setContents } = useContext(cartContext);

	const { name, price, image } = product.acf;
	const { category } = product;

	const removeItem = () => {
		setContents(contents.filter((p) => p !== product));
	};

	return (
		<m.tr>
			<td
				className="text-xl text-red-normal cursor-pointer"
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
				<p>{price} kr</p>
			</td>
		</m.tr>
	);
};

export default CartProduct;
