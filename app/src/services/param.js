const HOST = "http://localhost:8080";
const APIHOST = HOST + "/api";

export default {
    HOST,
    auth: {
        signin: HOST + "/auth/signin",
        signup: HOST + "/auth/signup",
    }
}
