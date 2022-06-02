const Slide = ({ image, price }) => {
	return (
		<div className="relative select-none">
			<div className="bg-red-normal text-white absolute left-[40%] text-center rounded-full w-12 h-12 items-center justify-center flex top-0">
				{price}
				<span className="text-xs">kr</span>
			</div>
			<div className="pt-4 mx-auto flex justify-center">
				<img className="rounded-full shadow-md" src={image} alt="slide" />
			</div>
		</div>
	);
};

export default Slide;
