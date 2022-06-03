import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Header from "../templates/Header";
import Footer from "../components/footer/Footer";
import TableBooking from "./TableBooking";
import CheckOut from "./CheckOut";
const App = () => {
	return (
		<div className="App flex flex-col">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/table" element={<TableBooking />} />
					<Route path="/check" element={<CheckOut />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
