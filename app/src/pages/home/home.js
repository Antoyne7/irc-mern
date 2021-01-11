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
                        <h2>Antoyne's Channel</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home
