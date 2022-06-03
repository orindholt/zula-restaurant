//create a thank you page that used for restaurant order
import React from "react";
import Layout from "../templates/Layout";

const Thank = () => {
	return (
		<Layout>
			<h1 className="text-center mt-10 font-bold text-7xl text-green-400">
				Thank you for your order
			</h1>
			<p className="text-center font-bold mt-10">
				Your order will be delivered within a short period of time
			</p>
		</Layout>
	);
};

export default Thank;
