import triangle from "../../assets/triangle.svg";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faSearch} from '@fortawesome/free-solid-svg-icons'

import React, {useState} from "react"

import "./listItem.style.scss"

const ListItem = ({text, icon = "add", height = "320px", children}) => {
    const [toggle, setToggle] = useState(false)

    return (
        <div
            className={`ListItem ${toggle ? "toggled" : ""}`}
            style={{
                "--height": height
            }}
        >
            <div className="main">
                <div className="icon-type-container">
                    {
                        icon === "add" &&
                        <FontAwesomeIcon icon={faPlus} color={"var(--primary)"}/>
                    }
                    {
                        icon === "search" &&
                        <FontAwesomeIcon icon={faSearch} color={"var(--primary)"}/>
                    }
                </div>
                <div className="text-container">
                    {text}
                </div>
                <div className="icon-arrow-container" onClick={() => setToggle(!toggle)}>
                    <img src={triangle} alt="Arrow icon"/>
                </div>
            </div>

            <div className="content">
                {children}
            </div>
        </div>
    )
};

export default ListItem
