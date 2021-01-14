import React, {useState} from "react";

import Input from "../input/input";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

import "./searchChannel.style.scss"
import axios from "axios";
import param from "../../services/param";

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
    const [channels, setChannels] = useState([]);

    const onChangeName = (e) => {
        const name = e.target.value;
        if (name.length >= 3) {
            axios.get(param.channel.search + name + "&maxresp=" + 3).then((response) => {
                setChannels(response.data)
            }).catch(e => {
                console.log(e)
            })
        } else {
            setChannels([])
        }
        setName(name);
    };

    const getServers = () => {
        return channels.map(server => (
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
                    channels &&
                    <div className="channels">
                        {getServers()}
                    </div>
                }

            </form>
        </div>
    )
};

export default SearchChannel
