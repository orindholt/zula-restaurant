import { Link } from "react-router-dom";

const NavItem = ({ text, to, className = "" }) => {
	return (
		<li
			className={`hover:text-red-normal hover:scale-105 transition-all flex ${className}`}
		>
			<Link className="w-full h-full" to={to}>
				{text}
			</Link>
		</li>
	);
};

export default NavItem;
