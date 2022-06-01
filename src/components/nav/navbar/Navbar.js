import Logo from "../../icons/Logo";
import NavItem from "./NavItem";

const Navbar = () => {
	return (
		<nav className="py-3 px-10 bg-black text-white">
			<div className="flex flex-col sm:flex-row">
				<Logo className="sm:mr-auto sm:ml-0 mx-auto" />
				<ul className="flex sm:justify-start justify-center items-center text-lg font-semibold gap-6">
					<NavItem
						text="Book a table"
						to="/"
						className="rounded-md bg-red-normal px-2 py-0.5 hover:!text-white"
					/>
					<NavItem text="Home" to="/" />
					<NavItem text="Menu" to="/menu" />
					<NavItem text="About" to="/about" />
					<NavItem text="Contact" to="/contact" />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
