import Icon from "../nav/icons/icon";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

const Socials = () => {
	return (
		<ul className="flex gap-4">
			<Icon
				icon={<IoLogoFacebook />}
				anchor="https://www.facebook.com/ZULA-Restaurant-339492223295791/"
			/>
			<Icon
				icon={<IoLogoInstagram />}
				anchor="https://www.instagram.com/zula__restaurant/"
			/>
		</ul>
	);
};

export default Socials;
