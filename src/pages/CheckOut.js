// create restaurant checkout page that will be used to order a food and drinks
import React from "react";
import Layout from "../templates/Layout";
import GenericInput from "../components/input/GenericInput";

const CheckOut = () => {
	return (
		<Layout>
			<div className="checkout-page">
				<div className="checkout-form">
					<h1>Checkout</h1>
					<form className="grid grid-cols-2 gap-4">
						<GenericInput lable="Name" type="text" className="order-summary" />
						<GenericInput lable="Phone" type="text" className="order-summary" />
						<div className="flex flex-col col-span-2 w-full">
							<GenericInput
								lable="Email"
								type="text"
								className="order-summary"
							/>
						</div>
						<GenericInput
							lable="Address"
							type="text"
							className="order-summary"
						/>
						<GenericInput lable="City" type="text" className="order-summary" />
						<GenericInput lable="State" type="text" className="order-summary" />
						<GenericInput lable="Zip" type="text" className="order-summary" />
						<div className="card-info flex flex-col col-span-2 w-full">
							<h3>Put your card information</h3>
							<GenericInput
								lable="Card Number"
								type="text"
								className="order-summary"
							/>
							<GenericInput
								lable="Expiration Date"
								type="text"
								className="order-summary"
							/>
							<GenericInput lable="CVV" type="text" className="order-summary" />
							<GenericInput
								lable="Name on Card"
								type="text"
								className="order-summary"
							/>
						</div>
						<button
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer col-span-2 w-fit justify-self-end"
							type="submit"
						>
							Order
						</button>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default CheckOut;
