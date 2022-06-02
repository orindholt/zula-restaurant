// create a link that can be used for restaurant table booking
import { Link } from "react-router-dom";

const GenericButton = ({
	caption = "Text Here",
	anchor,
	className,
	click = () => {},
}) => {
	return anchor ? (
		<Link
			to="/"
			className={`bg-red-normal hover:bg-red-dark hover:scale-105 text-white font-bold py-2 px-4 rounded min-w-fit transition-all ${className}`}
		>
			{caption}
		</Link>
	) : (
		<button
			type="button"
			onClick={click}
			className={`bg-red-normal hover:bg-red-dark hover:scale-105 text-white font-bold py-2 px-4 rounded min-w-fit transition-all ${className}`}
		>
			{caption}
		</button>
	);
};

export default GenericButton;
