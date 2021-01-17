import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
            axios.get(param.channel.get + location.state.slug,
                { headers: authHeader() }
            )
                .then((res) => {
                    setChannel(res.data.channel);
                }).catch(e => {
                    console.log(e)
                })
        }
    }, []);
    return (
        <Home menuSelected={1}>
            {channel &&
                <ChannelComponent channelData={channel} />
            }
        </Home>
    )
};

export default Channels
