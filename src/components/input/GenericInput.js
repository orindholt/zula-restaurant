// create restaurant checkout components that will be used to order a food and drinks
import React from "react";

const GenericInput = ({ lable, type, className }) => {
	return (
		<div className="flex flex-col ">
			<label>{lable}</label>
			<input
				className={className}
				type={type}
				placeholder={lable}
				name={lable}
				required
			/>
		</div>
	);
};

export default GenericInput;
