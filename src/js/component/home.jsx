import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import { Card } from "./Card.jsx";
const Home = () => {
    return (
        <div className="text-center">
            <Navbar />
            <Jumbotron />
            <div className="container mt-5">
                <div className="d-flex justify-content-between flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};
export default Home;