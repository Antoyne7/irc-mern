import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import "./auth.styles.scss"
import Input from "../../components/input/input";
import {Link} from "react-router-dom";
import Button from "../../components/button/button";

import AuthService from "../../services/auth.service"

const Login = () => {
    const history = useHistory();

    const [firstCredential, setFirstCredential] = useState("")
    const [password, setPassword] = useState("")

    const onChangeFirstCredential = (e) => {
        const firstCredential = e.target.value;
        setFirstCredential(firstCredential);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        AuthService.login(firstCredential, password).then(
            () => {
                history.push("/home");
            },
            (error) => {
                console.error('error:', error)
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
                    value={firstCredential}
                    onChange={onChangeFirstCredential}
                    placeholder={"Nom d'utilisateur ou Email"}
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
