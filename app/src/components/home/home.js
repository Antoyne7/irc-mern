import React from "react";
import Sidebar from "../sidebar/sidebar";
import Menu from "../menu/menu"
import "./home.style.scss"

const Home = ({children, menuSelected = 0}) => {
    return (
        <div className="home">
            <div className="home-container">
                <Sidebar/>
                <div className="home-content">
                    <div className="content">
                        {children}
                    </div>
                </div>
                <Menu selected={menuSelected}/>
            </div>
        </div>
    )
};

export default Home
