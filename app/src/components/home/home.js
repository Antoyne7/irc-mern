import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Menu from "../menu/menu"
import "./home.style.scss"
import { useHistory } from "react-router-dom";

import useUser from '../../services/use-user'

const Home = ({ children, menuSelected = 0 }) => {
    const history = useHistory()
    const userState = useUser()
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener('resize', handleResize)

        setIsMobile(window.innerWidth <= 768)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {  
        if (!userState.isLoading && !userState.user) {
            history.push('/')
        } else {
            if (userState.user?.whiteTheme) {
                document.querySelector('.App').classList.add('white-theme')
            } else {
                document.querySelector('.App').classList.remove('white-theme')
            }
        }
    }, [userState, history])

    return (
        (!userState.isLoading &&
            <div className="home">
                <div className="home-container">
                    {!isMobile && 
                        <Sidebar channels={userState.user?.channels} />
                    }
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
