import React from "react"
import { useHistory } from "react-router-dom"

import triangle from "../../assets/triangle.svg"
import settings from "../../assets/setting.svg"

const Navigation = () => {
    const history = useHistory()

    return (
        <div className="Navigation">
            <Link to={"/channels"}>
                <img src={triangle} alt="Back icon" /> Retour
            </Link>

            <Link to={"/channels/CHANNEL/param"}>
                <img src={settings} alt="Settings icon"/>
            </Link>
        </div>
    )
}

export default Navigation
