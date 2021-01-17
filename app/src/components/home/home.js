import React, { useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import Menu from "../menu/menu"
import "./home.style.scss"
import { useHistory } from "react-router-dom";

import useUser from '../../services/use-user'

const Home = ({ children, menuSelected = 0 }) => {
    const history = useHistory();
    const userState = useUser()

    useEffect(() => {
        if (!userState.isLoading && !userState.user) {
            history.push({
                pathname: '/'
            })
        }
    }, [userState, history])

    return (
        (!userState.isLoading &&
            <div className="home">
                <div className="home-container">
                    <Sidebar channels={userState.user?.channels} />
                    <div className="home-content">
                        <div className="content">
                            {children}
                        </div>
                    </div>
                    <Menu selected={menuSelected} />
                </div>
            </div>)
    )
};

export default Home
