import React from "react";
import Jumbotron from "./Jumbotron.jsx"
import Navbar from "./Navbar.jsx";

import { Footer } from "./Footer.jsx";
import { CardBody } from "./CardBody.jsx";

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container">
			<Jumbotron/>
			<CardBody />
			</div>
			<Footer />
		</div>
		
	);
};

export default Home;
