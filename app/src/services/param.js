const HOST = "http://localhost:8080";
const APIHOST = HOST + "/api";

export default {
    HOST,
    auth: {
        signin: APIHOST + "/auth/signin",
        signup: APIHOST + "/auth/signup",
        guest_login: APIHOST + "/auth/guest_login",
        checkToken: APIHOST + "/auth/check",
    },
    channel: {
        add: APIHOST + "/channel/add"
    }
}
