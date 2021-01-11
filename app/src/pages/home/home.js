import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Channel from "../../components/channel/channel"
import "./home.style.scss"

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="home-content">
                <div className="content">
                    <Channel/>
                </div>
            </div>
        </div>
    )
};

export default Home
