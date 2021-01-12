import React from "react";

import Home from "../../components/home/home";
import ChannelComponent from "../../components/channel/channel"

const Channels = () => {
    return (
        <Home menuSelected={1}>
            <ChannelComponent />
        </Home>
    )
};

export default Channels
