import React, {useState} from "react";

import Input from "../input/input";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

import "./searchChannel.style.scss"

const SERVERS = [
    {
        name: "Diablox9's Server",
        connected: 12,
        max_capacity: 32,
    },
    {
        name: "Diablox9 fans",
        connected: 9999,
        max_capacity: 10000,
    },
    {
        name: "Diablox9 fans le retour",
        connected: 99,
        max_capacity: 112,
    },
    {
        name: "Delphine's Server",
        connected: 0,
        max_capacity: 32,
    },
    {
        name: "Roblox",
        connected: 0,
        max_capacity: 32,
    },
    {
        name: "Didier",
        connected: 10,
        max_capacity: 10,
    },
]

const SearchChannel = () => {
    const [name, setName] = useState("")

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const getServers = () => {
        return SERVERS.filter(server => server.name.toLowerCase().includes(name.toLowerCase()))
            .map(server => (
                <div key={server.name} className="channel-item">
                    <div className="channel-name">
                        {server.name}
                    </div>
                    <div className="channel-users">
                        {server.connected}/{server.max_capacity}
                        <FontAwesomeIcon icon={faUser} color={"var(--primary)"}/>
                    </div>
                </div>
            ))
    }

    return (
        <div className="SearchChannel">
            <form action="">
                <Input
                    placeholder="Nom du salon"
                    name="channel-name"
                    value={name}
                    onChange={onChangeName}
                />
                {
                    name.length > 2 &&
                    <div className="channels">
                        {getServers()}
                    </div>
                }

            </form>
        </div>
    )
};

export default SearchChannel
