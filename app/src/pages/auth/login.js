import React, {useState, useHi} from "react";
import { useHistory } from "react-router-dom";

import "./auth.styles.scss"
import Input from "../../components/input/input";
import {Link} from "react-router-dom";
import Button from "../../components/button/button";

import AuthService from "../../services/auth.service"

const Login = () => {
    const history = useHistory();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // setMessage("");
        // setLoading(true);
        AuthService.login(username, password).then(
            () => {
                // TODO: redirect
                console.log("Redirect page", AuthService.getCurrentUser())
                history.push("/main");
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                // setLoading(false);
                // setMessage(resMessage);
            }
        );
    };

    // https://fr.reactjs.org/docs/forms.html#handling-multiple-inputs
    return (
        <div className="Login">
            <h1 className="page-title">
                Connexion
            </h1>

            <form>
                <Input
                    value={username}
                    onChange={onChangeUsername}
                    placeholder={"Nom d'utilisateur"}
                    name={"name"}
                />
                <Input
                    value={password}
                    onChange={onChangePassword}
                    type={"password"}
                    placeholder={"Mot de passe"}
                    name={"name"}
                />
                <div className="link-container">
                    <Link to={"/register"}>Créer un compte</Link>
                </div>
            </form>

            <div className="button-container">
                <Button onClick={handleLogin}>Se connecter</Button>
            </div>
        </div>
    )
}

export default Login
