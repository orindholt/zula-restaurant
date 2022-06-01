const Layout = ({ children, className }) => {
	return (
		<div
			className={`pt-32 px-[5%] md:px-[15%] w-full min-h-screen ${className}`}
		>
			{children}
		</div>
	);
};

export default Layout;
