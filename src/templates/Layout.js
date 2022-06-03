const Layout = ({ children, className }) => {
	return (
		<div
			className={`pt-32 pb-10 px-[5%] md:px-[15%] w-full min-h-screen flex flex-col ${className}`}
		>
			{children}
		</div>
	);
};

export default Layout;
