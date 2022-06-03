import { createContext, useState } from "react";

export const cartContext = createContext(null);

const CartContextProvider = ({ children }) => {
	const [contents, setContents] = useState([]);
	return (
		<cartContext.Provider value={{ contents, setContents }}>
			{children}
		</cartContext.Provider>
	);
};

export default CartContextProvider;
