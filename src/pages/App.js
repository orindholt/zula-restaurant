import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Header from "../templates/Header";
import Footer from "../components/footer/Footer";
import TableBooking from "./TableBooking";
import ScrollToTop from "../util/SlideToTop";
import Cart from "./Cart";
import CartContextProvider from "../util/cartContext";

const App = () => {
	return (
		<div className="App flex flex-col">
			<CartContextProvider>
				<Router>
					<ScrollToTop />
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/table" element={<TableBooking />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
					<Footer />
				</Router>
			</CartContextProvider>
		</div>
	);
};

export default App;
