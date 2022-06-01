import { Link } from "react-router-dom";

const NavItem = ({ text, to }) => {
	return (
		<li className="font-light hover:text-red-normal hover:scale-105 transition-all">
			<Link to={to}>{text}</Link>
		</li>
	);
};

export default NavItem;
