import React from "react";
import Jumbotron from "./Jumbotron.jsx"
import Navbar from "./Navbar.jsx";


const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron/>
		</div>
		
	);
};

export default Home;
