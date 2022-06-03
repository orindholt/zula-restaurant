import React from "react";
import Layout from "../templates/Layout";
const TableBooking = () => {
	return (
		<Layout>
			<div className="table-booking text-center">
				<h1>TableBooking</h1>
				<p>here you can book your table</p>
				<form className="grid grid-cols-2 gap-4">
					<div className="flex flex-col ">
						<label>Name</label>
						<input
							className="book-table"
							type="text"
							placeholder="Name"
							name="name"
							required
						/>
					</div>
					<div className="flex flex-col ">
						<label>Email</label>
						<input
							className="book-table"
							type="text"
							placeholder="Email"
							name="email"
							required
						/>
					</div>
					<div className="flex flex-col ">
						<label>Phone</label>
						<input
							className="book-table"
							type="text"
							placeholder="Phone"
							name="phone"
							required
						/>
					</div>
					<div className="flex flex-col ">
						<label>Date</label>
						<input
							className="book-table"
							type="date"
							placeholder="Date"
							name="date"
							required
						/>
					</div>
					<div className="flex flex-col ">
						<label>Time</label>
						<input
							className="book-table"
							type="time"
							placeholder="Time"
							name="time"
							required
						/>
					</div>
					<div className="flex flex-col ">
						<label>Number of people</label>
						<input
							className="book-table"
							type="number"
							placeholder="Number of people"
							name="people"
							required
						/>
					</div>
					<div className="flex flex-col col-span-2 w-full">
						<label>Message</label>
						<textarea
							className="contact-input w-full h-32 resize-none"
							name="message"
							placeholder="Message"
							required
						></textarea>
					</div>
					<button
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer col-span-2 w-fit justify-self-end"
						type="submit"
					>
						Book
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default TableBooking;
