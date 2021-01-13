import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import Home from "../../components/home/home";
import ChannelComponent from "../../components/channel/channel"
import param from "../../services/param";
import authHeader from "../../services/auth-header";
import axios from "axios";

const Channels = () => {
    const location = useLocation();

    const [channel, setChannel] = useState(null);

    useEffect(() => {
        if (location.state) {
            console.log(location.state.channel);
            axios.get(param.channel.get + location.state.channel,
                {headers: authHeader()}
                )
                .then((res) => {
                console.log(res)
            }).catch(e => {
                console.log(e)
            })
        }
    }, []);
    return (
        <Home menuSelected={1}>
            {channel &&
            <ChannelComponent channel={channel}/>
            }
        </Home>
    )
};

export default Channels
