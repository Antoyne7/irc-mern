import React, {useState, useEffect} from "react";
import "./channel.styles.scss"

import Navigation from "../navigation/navigation";
import ListItem from "../listItem/listItem";
import CreateChannel from "./createChannel";
import SearchChannel from "./searchChannel";

const NewChannelComponent = () => {

    return (
        <div className="channel-content-container">
            <div className="title-container container">
                <h2>Ajouter un salon</h2>
            </div>
            <Navigation />
            <ListItem text="Créer un nouveau salon" icon="add">
                <CreateChannel />
            </ListItem>
            <ListItem text="Rechercher un salon" icon="search" height="500px">
                <SearchChannel />
            </ListItem>
        </div>
    )
};

export default NewChannelComponent
