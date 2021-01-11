import React from "react";
import "./sidebar.style.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar-content">
                <div className="user">
                    <div className="pfp">
                        {/*<span className="placeholder">D</span>*/}
                    </div>
                    <h3 className="name">Diablox9</h3>
                </div>
                <div className="link-container">
                    <a className="link" href="">
                        <FontAwesomeIcon icon={faSearch}/>
                        Rechercher un salon</a>
                    <a className="link" href="">
                        <FontAwesomeIcon icon={faPlus}/>
                        Creer un salon</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
