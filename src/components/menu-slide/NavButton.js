import { useSwiper } from "swiper/react";

const NavButton = ({ icon, forward }) => {
	const swiper = useSwiper();
	return (
		<button
			type="button"
			className={`absolute top-0 bottom-0 z-10 ${
				forward ? "right-0" : "left-0"
			}`}
			onClick={() => (forward ? swiper.slideNext() : swiper.slidePrev())}
		>
			<div className="text-white bg-red-normal rounded-full grid place-content-center text-2xl p-0.5 mx-1">
				{icon}
			</div>
		</button>
	);
};

export default NavButton;
