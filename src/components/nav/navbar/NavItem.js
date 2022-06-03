import { Link } from "react-router-dom";

const NavItem = ({ children, to, className = "" }) => {
	return (
		<li
			className={`hover:text-red-normal hover:scale-105 transition-all flex ${className}`}
		>
			<Link className="w-full h-full" to={to}>
				{children}
			</Link>
		</li>
	);
};

export default NavItem;
