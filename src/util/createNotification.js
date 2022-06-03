import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const createNotification = (type, message = "default") => {
	switch (type) {
		case "success":
			toast.success(message);
			break;
		case "error":
			toast.error(message);
			break;
		default:
			toast.success(message);
			break;
	}
};

export default createNotification;
