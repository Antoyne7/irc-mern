import React, { useEffect, useState } from "react";
import "./sidebar.style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import param from "../../services/param"
import Picture from "../picture/picture"
import AuthHeader from "../../services/auth-header"
import { useHistory } from "react-router-dom";

const Sidebar = ({ channels }) => {
    const history = useHistory();
    const [channelList, setChannelList] = useState([])

    useEffect(() => {
        fetchChannels()
    }, [])

    const fetchChannels = async () => {
        const channelsTemp = []
        for (const channel of channels) {
            await axios.get(param.channel.get + channel, { headers: AuthHeader()})
                .then((resp) => {
                    console.log(resp)
                    channelsTemp.push(resp.data.channel)
                })
        }
        setChannelList(channelsTemp)
    }
    
    const renderChannel = (channel) => {
        return (
            <div key={channel.name} onClick={() => onClickChannel(channel.slug)} className="channel">
                <div className="channel-content">
                    <Picture size="62px" />
                    <div className="text">
                        <h3>{channel.name}</h3>
                        <span>{channel.users.length} personnes connectés</span>
                    </div>
                </div>
                <hr />
            </div>
        )
    }

    const onClickChannel = (slug) => {
        history.push({
            pathname: '/channels/' + slug
        })
    }

    return (
        <div className="sidebar">

            <div className="sidebar-content">
                <div className="user">
                    <Picture size="48px" />
                    <h3 className="name">Diablox9</h3>
                </div>
                <div className="link-container">
                    <a className="link" href="">
                        <FontAwesomeIcon icon={faSearch} />
                        Rechercher un salon</a>
                    <a className="link" href="">
                        <FontAwesomeIcon icon={faPlus} />
                        Creer un salon</a>
                </div>
                <hr />
                <div className="channel-container">
                    {channelList.map((channel) => renderChannel(channel))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
