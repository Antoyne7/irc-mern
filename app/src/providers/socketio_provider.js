import param from "../services/param";
import io from "socket.io-client"


export const connection = () => {
    return  io.connect(param.HOST);
};