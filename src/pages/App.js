import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartContextProvider from "../util/cartContext";
import ScrollToTop from "../util/SlideToTop";
import Header from "../templates/Header";
import Footer from "../components/footer/Footer";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Thank from "./Thank";
import CheckOut from "./CheckOut";
import TableBooking from "./TableBooking";
import Cart from "./Cart";
import { ToastContainer } from "react-toastify";

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
						<Route path="/check" element={<CheckOut />} />
						<Route path="/thank" element={<Thank />} />
					</Routes>
					<Footer />
				</Router>
			</CartContextProvider>
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={true}
			/>
		</div>
	);
};

export default App;
