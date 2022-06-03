// create slider menu component with items that can have arrow icon to go back and forward
import { Swiper, SwiperSlide } from "swiper/react";
import { motion as m } from "framer-motion";
import "swiper/css";
import Slide from "./slide/Slide";
import NavButton from "./NavButton";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import useFetchProduct from "../../hooks/useFetchProduct";
import Loader from "../loader/Loader";

const MenuSlide = () => {
	const data = useFetchProduct();

	return data ? (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="mt-10 max-w-3xl"
		>
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
					data.map((product, i) => {
						return (
							<SwiperSlide key={i}>
								<Slide image={product.acf.image} price={product.acf.price} />
							</SwiperSlide>
						);
					})
				}
				<NavButton icon={<IoChevronBack />} forward={false} />
				<NavButton icon={<IoChevronForward />} forward={true} />
			</Swiper>
		</m.div>
	) : (
		<Loader />
	);
};

export default MenuSlide;
