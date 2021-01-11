import React from "react";
import "./sidebar.style.scss"
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faPlus} from '@fortawesome/free-solid-svg-icons'
// import {faSearch} from '@fortawesome/free-solid-svg-icons'

import Picture from "../picture/picture"

const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar-content">
                <div className="user">
                    <Picture size="48px"/>
                    <h3 className="name">Diablox9</h3>
                </div>
                <div className="link-container">
                    <a className="link" href="">
                        {/*<FontAwesomeIcon icon={faSearch}/>*/}
                        Rechercher un salon</a>
                    <a className="link" href="">
                        {/*<FontAwesomeIcon icon={faPlus}/>*/}
                        Creer un salon</a>
                </div>
                <hr/>
                <div className="channel-container">
                    <div className="channel">
                        <div className="channel-content">
                            <Picture size="62px"/>
                            <div className="text">
                                <h3>Antoyne's Channel</h3>
                                <span>12 personnes connectés</span>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="channel active">
                        <div className="channel-content">
                            <Picture size="60px"/>
                            <div className="text">
                                <h3>Gaston's Channel</h3>
                                <span>8 personnes connectés</span>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
