import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Header from "../templates/Header";
import Footer from "../components/footer/Footer";
import TableBooking from "./TableBooking";
import CheckOut from "./CheckOut";
import ScrollToTop from "../util/SlideToTop";
import Thank from "./Thank";
const App = () => {
	return (
		<div className="App flex flex-col">
			<Router>
				<ScrollToTop />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/table" element={<TableBooking />} />
					<Route path="/check" element={<CheckOut />} />
					<Route path="/thank" element={<Thank />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
