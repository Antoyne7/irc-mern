const HOST = "http://localhost:8080";
const APIHOST = HOST + "/api";

const param = {
    HOST,
    auth: {
        signin: APIHOST + "/auth/signin",
        signup: APIHOST + "/auth/signup",
        guest_login: APIHOST + "/auth/guest_login",
        checkToken: APIHOST + "/auth/check",
    },
    channel: {
        add: APIHOST + "/channel/add",
        connect: APIHOST + "/channel/connect",
        get: APIHOST + "/channel/get?channel=",
        search: APIHOST + "/channel/search?search=",
        getMessages: APIHOST + "/channel/messages/get"
    },
    user: {
        picture: APIHOST + "/profile/picture",
        profile: APIHOST + "/profile",
        theme: APIHOST + "/profile/theme?whiteTheme=",
    }
}

export default param;
