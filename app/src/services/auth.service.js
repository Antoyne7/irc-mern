import axios from "axios";

import param from "./param"

const register = (username, email, password, passwordRepeat) => {
    return axios.post(param.auth.signup, {
        username,
        email,
        password,
        passwordRepeat
    });
};

const login = (email, password) => {
    return axios
        .post(param.auth.signin, {
            email,
            password,
        })
        .then((response) => {
            console.log()
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
