import React from "react";
import Sidebar from "../sidebar/sidebar";
import Menu from "../menu/menu"
import "./home.style.scss"

const Home = ({children}) => {
    return (
        <div className="home">
            <div className="home-container">
                <Sidebar/>
                <div className="home-content">
                    <div className="content">
                        {children}
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    )
};

export default Home
