import { Link } from "react-router-dom";

const Logo = ({ text = "Zula", className }) => {
	return (
		<h1
			className={`font-bold font-imbue text-4xl hover:scale-105 transition-transform ${className}`}
		>
			<Link to="/">{text}</Link>
		</h1>
	);
};

export default Logo;
