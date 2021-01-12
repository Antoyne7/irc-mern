import React, {useState, useEffect} from "react";
import "./channel.styles.scss"
import Picture from "../picture/picture"
import io from "socket.io-client"
import param from "../../services/param";


const NewChannelComponent = () => {

    // useEffect(() => {
    //     const socket = io.connect(param.HOST);
    //     socket.on('message', message=> {
    //         console.log(message)
    //     })
    // }, []);

    return (
        <div className="channel-content-container">
            <div className="title-container container">
                <h2>Ajouter un salon</h2>
            </div>
             
        </div>
    )
};

export default NewChannelComponent
