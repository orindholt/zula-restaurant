const Slide = ({ image, price }) => {
	return (
		<div className="relative">
			<div className="bg-red-normal  text-white absolute left-[40%] text-center rounded-full w-10 h-10 items-center justify-center flex top-0">
				${price}
			</div>
			<div className="pt-4 mx-auto flex justify-center">
				<img className="rounded-full" src={image} alt="slide" />
			</div>
		</div>
	);
};

export default Slide;
