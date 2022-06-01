// create slider menu component with items that can have arrow icon to go back and forward
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slide from "./slide/Slide";
import { products } from "../../util/products";
import NavButton from "./slide/NavButton";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

const MenuSlide = () => {
	return (
		<div className="mt-10 max-w-3xl mx-auto">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				spaceBetween={20}
				slidesPerView={"3"}
				loop={true}
				loopFillGroupWithBlank={true}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 350,
					modifier: 1,
				}}
			>
				{
					// product loop
					products.data.map(({ img, price }, i) => {
						return (
							<SwiperSlide key={i}>
								<Slide image={img} price={price} />
							</SwiperSlide>
						);
					})
				}
				<NavButton icon={<IoChevronBack />} forward={false} />
				<NavButton icon={<IoChevronForward />} forward={true} />
			</Swiper>
		</div>
	);
};

export default MenuSlide;
