// create slider menu component with items that can have arrow icon to go back and forward
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Slide from "./slide/Slide";
const MenuSlide = () => {
	return (
		<div className="menu-slide flex mt-10 gap-2 p-4">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				spaceBetween={70}
				slidesPerView={"2"}
				loop={true}
				loopFillGroupWithBlank={true}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 350,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Slide image="/assets/products/abizar.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/bozena-shiro.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/derho.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/fetfet-zegni.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/fetfet.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/hamli-besega.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/tebsi.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/temtemo.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/vega-shiro.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/vegetarisk-kombination.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/zegeni.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/zelzel-tebsi.jpeg" />
				</SwiperSlide>
				<SwiperSlide>
					<Slide image="/assets/products/zula-special.jpeg" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default MenuSlide;
