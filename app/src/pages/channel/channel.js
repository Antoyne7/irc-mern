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
        const getChannelSlug = () => {
            return location.pathname.split('/channels/')[1]
        }

        axios.get(param.channel.get + getChannelSlug(),
            { headers: authHeader() }
        )
            .then((res) => {
                setChannel(res.data.channel);
            }).catch(e => {
                console.log(e)
            })
    }, [location.pathname]);

    return (
        <Home menuSelected={1}>
            {channel &&
                <ChannelComponent channelData={channel} />
            }
        </Home>
    )
};

export default Channels
