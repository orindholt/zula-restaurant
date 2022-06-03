import { createContext, useEffect, useState } from "react";

const storageItem = localStorage.getItem("cart");
export const cartContext = createContext(null);

const CartContextProvider = ({ children }) => {
	const [contents, setContents] = useState(
		storageItem ? JSON.parse(storageItem) : []
	);
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(contents));
	}, [contents]);

	return (
		<cartContext.Provider value={{ contents, setContents }}>
			{children}
		</cartContext.Provider>
	);
};

export default CartContextProvider;
