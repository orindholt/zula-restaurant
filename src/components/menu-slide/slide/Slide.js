import React from "react";

const Slide = ({ image }) => {
	return (
		<div className=" relative">
			<div className="cost bg-red-500  text-white absolute left-[40%] text-center rounded-full w-10 h-10 items-center justify-center flex top-0">
				$119
			</div>
			<div className="pt-4 mx-auto flex justify-center">
				<img className="rounded-full w-3/4" src={image} alt="slide" />
			</div>
		</div>
	);
};

export default Slide;
