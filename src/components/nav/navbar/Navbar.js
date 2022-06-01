import Logo from "../../logo/Logo";
import NavItem from "./NavItem";

const Navbar = () => {
	return (
		<nav className="py-3 px-10 bg-black text-white">
			<ul className="flex items-center text-lg font-semibold gap-6">
				<Logo className="mr-auto" />
				<NavItem text="Home" to="/" />
				<NavItem text="Menu" to="/menu" />
				<NavItem text="About" to="/about" />
				<NavItem text="Contact" to="/contact" />
			</ul>
		</nav>
	);
};

export default Navbar;
