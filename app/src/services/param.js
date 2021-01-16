const HOST = "http://localhost:8080";
const APIHOST = HOST + "/api";

const param = {
    HOST,
    uploads: "/uploads",
    auth: {
        signin: APIHOST + "/auth/signin",
        signup: APIHOST + "/auth/signup",
        guest_login: APIHOST + "/auth/guest_login",
        checkToken: APIHOST + "/auth/check",
    },
    channel: {
        add: APIHOST + "/channel/add",
        get: APIHOST + "/channel/get?channel=",
        search: APIHOST + "/channel/search?search="
    },
    user: {
        picture: APIHOST + "/profile/picture",
        profile: APIHOST + "/profile",
    }
}

export default param;
