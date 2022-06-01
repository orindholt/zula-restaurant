import React, { useState } from "react";

const Slide = ({ image }) => {
	return (
		<div>
			<img src={image} alt="slide" />
		</div>
	);
};

export default Slide;
