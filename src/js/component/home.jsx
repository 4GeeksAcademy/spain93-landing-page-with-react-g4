import React from "react";
import Jumbotron from "./Jumbotron.jsx"
import Navbar from "./Navbar.jsx";

import { Footer } from "./Footer.jsx";

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron/>
			<Footer />
		</div>
		
	);
};

export default Home;
