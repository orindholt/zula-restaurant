import { IoTime, IoPhonePortraitOutline } from "react-icons/io5";
import Socials from "../../socials/Socials";
import Icon from "../icons/icon";

const InfoBar = () => {
	return (
		<aside className="bg-black bg-opacity-80 backdrop-blur-sm text-white py-2 px-4 ">
			<div className="flex justify-between">
				<ul className="flex gap-6">
					<li className="flex items-center gap-2">
						<Icon icon={<IoTime />} /> Opening hours 14-22
					</li>
					<li>
						<a className="flex items-center gap-2" href="tel:+4535838000">
							<Icon icon={<IoPhonePortraitOutline />} />
							+45 35 83 80 00
						</a>
					</li>
				</ul>
				<Socials />
			</div>
		</aside>
	);
};

export default InfoBar;
