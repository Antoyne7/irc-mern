import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Channel from "../../components/channel/channel"
import Menu from "../../components/menu/menu"
import "./home.style.scss"

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <Sidebar/>
                <div className="home-content">
                    <div className="content">
                        <Channel/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    )
};

export default Home
