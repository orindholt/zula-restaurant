import Layout from "../templates/Layout";

const Contact = () => {
	return (
		<Layout className="text-center ">
			<div className="">
				<h1 className="text-4xl font-bold text-center">Contact Zula</h1>
				<p className="text-center mt-2">
					Zula er en lille by i det centrale Eritrea.
				</p>
				<form className="grid grid-cols-2 gap-4 mx-auto max-w-3xl mt-4">
					<div className="flex flex-col ">
						<label className="text-center">Name</label>
						<input
							className="contact-input"
							type="text"
							placeholder="Name"
							name="name"
							required
						/>
					</div>
					<div className="flex flex-col">
						<label className="text-center">Email</label>
						<input
							className="contact-input"
							type="text"
							placeholder="Email"
							name="Email"
							required
						/>
					</div>
					<div className="flex flex-col">
						<label className="text-center">Phone</label>
						<input
							className="contact-input"
							type="text"
							placeholder="phone"
							name="phone"
							required
						/>
					</div>
					<div className="flex flex-col">
						<label className="text-center">Subject</label>
						<input
							className="contact-input"
							type="text"
							placeholder="Phone"
							name="phone"
							required
						/>
					</div>
					<div className="flex flex-col col-span-2 w-full">
						<label className="text-center">Message</label>
						<textarea
							className="contact-input w-full h-32 resize-none"
							type="text"
							placeholder="Message"
							name="message"
							required
						/>
					</div>

					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer col-span-2 w-fit justify-self-end">
						Send
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default Contact;
