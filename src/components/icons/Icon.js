import { IoAddCircle } from "react-icons/io5";

const Icon = ({ icon = <IoAddCircle />, anchor }) => {
	const containerClasses =
		"bg-white p-1.5 rounded-full text-red-normal inline-block";
	return anchor ? (
		<a
			className={`${containerClasses} hover:bg-red-normal hover:text-white transition-colors`}
			href={anchor}
			target="_blank"
			rel="noreferrer"
		>
			{icon}
		</a>
	) : (
		<div className={containerClasses} href={anchor}>
			{icon}
		</div>
	);
};

export default Icon;
