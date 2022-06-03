import GenericButton from "../../button/GenericButton";
import Logo from "../../icons/Logo";
import NavItem from "./NavItem";
import { IoCart } from "react-icons/io5";
import { cartContext } from "../../../util/cartContext";
import { useContext } from "react";

const Navbar = () => {
	const cart = useContext(cartContext);

	return (
		<nav className="py-3 px-10 bg-black text-white">
			<div className="flex flex-col sm:flex-row">
				<Logo className="sm:mr-auto sm:ml-0 mx-auto" />
				<ul className="flex sm:justify-start justify-center items-center text-lg font-semibold gap-6">
					<GenericButton
						anchor="/table"
						caption="Book a table"
						className="rounded-md !py-0.5 !px-2"
					/>
					<NavItem content="Home" to="/">
						Home
					</NavItem>
					<NavItem content="Menu" to="/menu">
						Menu
					</NavItem>
					<NavItem content="About" to="/about">
						About
					</NavItem>
					<NavItem content="Contact" to="/contact">
						Contact
					</NavItem>
					<NavItem to="/cart" className="hover:!text-white ">
						<div
							data-amount={cart.contents.length}
							className={`text-2xl ${
								Boolean(cart.contents.length) ? "cart" : ""
							}`}
						>
							<IoCart />
						</div>
					</NavItem>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
