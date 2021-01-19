import React, {useState} from "react";

import Input from "../input/input";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

import "./searchChannel.style.scss"
import axios from "axios";
import param from "../../services/param";
import {useHistory} from "react-router-dom";
import authHeader from "../../services/auth-header";


const SearchChannel = () => {
    const history = useHistory();

    const [name, setName] = useState("")
    const [channels, setChannels] = useState([]);

    const onChangeName = (e) => {
        const name = e.target.value;
        if (name.length >= 3) {
            axios.get(param.channel.search + name + "&maxresp=" + 5, {headers: authHeader()})
                .then((response) => {
                    console.log(response.data);
                    setChannels(response.data)
                }).catch(e => {
                console.log(e)
            })
        } else {
            setChannels([])
        }
        setName(name);
    };
    const goTo = (slug) => {
        axios.post(
            param.channel.connect,
            {slug},
            {headers: authHeader()}
        ).then((response) => {
            console.log("ajout channel: ", response);
            history.push({
                pathname: '/channels/' + slug,
                state: {slug: slug}
            })
        }).catch(e => {
            console.log("ajout channel: ERREUR:", e)
        })
    };

    const getServers = () => {
        return channels.map(server => (
            <div onClick={() => goTo(server.slug)} key={server.name} className="channel-item">
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
