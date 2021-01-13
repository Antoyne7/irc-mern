import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import Home from "../../components/home/home";
import ChannelComponent from "../../components/channel/channel"

const Channels = () => {
    const location = useLocation();

    const [channel, setChannel] = useState(null);

    useEffect(() => {
        if (location.state) {
            console.log(location.state.channel)
            axios.get()
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
