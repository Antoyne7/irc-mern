import React from "react"
import {Link, useHistory} from "react-router-dom"

import "./navigation.style.scss"

import triangle from "../../assets/triangle.svg"
import settings from "../../assets/setting.svg"

const Navigation = ({showSettings = false}) => {
    // const history = useHistory()

    return (
        <div className="Navigation">
            <Link to={"/channels"} className="back">
                <img src={triangle} alt="Back icon" /> Retour
            </Link>

            {showSettings && <Link to={"/channels/CHANNEL/param"} className="settings">
                    <img src={settings} alt="Settings icon"/>
                </Link>
            }
        </div>
    )
}

export default Navigation
