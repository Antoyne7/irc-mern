import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.style.scss"

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="home-content">
                <div className="container">
                    <div className="content">
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home
