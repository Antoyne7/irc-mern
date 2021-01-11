const HOST = "http://localhost:8080/api"

export default {
    HOST,
    auth: {
        signin: HOST + "/auth/signin",
        signup: HOST + "/auth/signup",
    }
}
