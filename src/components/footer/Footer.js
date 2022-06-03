import { openingsHours } from "../../util/openingHours";

const Footer = () => {
	return (
		<footer className="p-6 bg-black text-white">
			<h2 className="font-bold text-xl mb-4 text-center">
				KONTAKT &#38; ÅBNINGSTIDER
			</h2>
			<div className="flex gap-10 justify-center">
				<div className="flex flex-col gap-2">
					<div>
						<h3 className="font-bold">Zula ApS</h3>
						<p>CVR: 39974533</p>
					</div>
					<div>
						<h3 className="font-bold">Adresse:</h3>
						<a
							className="text-red-normal inline-block underline hover:translate-x-2 transition-transform"
							href="https://www.google.com/maps/dir//Jagtvej+43,+2200+K%C3%B8benhavn/@55.6921657,12.5439159,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x465253adbba933c3:0x32c718a4cb6868ee!2m2!1d12.5461046!2d55.6921657"
							target="_blank"
							rel="noreferrer"
						>
							Jagtvej 43,
							<br />
							Nørrebro 2200 København N
						</a>
					</div>
					<div>
						<h3 className="font-bold">Email:</h3>
						<a
							className="text-red-normal inline-block underline hover:translate-x-2 transition-transform"
							href="mailto:teddy1093@yahoo.com"
						>
							teddy1093@yahoo.com
						</a>
					</div>
					<div>
						<h3 className="font-bold">Telefon:</h3>
						<a
							className="text-red-normal inline-block underline hover:translate-x-2 transition-transform"
							href="tel:+4535838000"
						>
							35 83 80 00
						</a>
					</div>
				</div>
				<ul className="flex flex-col gap-1">
					{openingsHours.map(({ day, time }, i) => {
						return (
							<li
								key={i}
								className="w-48 flex justify-between border-b border-solid border-white border-opacity-20 pb-0.5"
							>
								{day}{" "}
								<span className="font-bold">
									{time.from} - {time.to}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
