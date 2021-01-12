import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";

import Home from "../../components/home/home";
import ChannelComponent from "../../components/channel/channel"

const Channels = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.state) {
            console.log(location.state.channel)
        }
    }, []);
    return (
        <Home menuSelected={1}>
            <ChannelComponent/>
        </Home>
    )
};

export default Channels
