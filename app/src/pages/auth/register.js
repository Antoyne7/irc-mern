import React, {useState} from "react";

import "./auth.styles.scss"
import Input from "../../components/input/input";
import {Link} from "react-router-dom";
import Button from "../../components/button/button";
import AuthService from "../../services/auth.service"

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangePasswordRepeat = (e) => {
        const passwordRepeat = e.target.value;
        setPasswordRepeat(passwordRepeat);
    };


    const handleRegister = (e) => {
        e.preventDefault();
        // setMessage("");
        // setSuccessful(false);
        AuthService.register(username, email, password, passwordRepeat).then(
            (response) => {
                // setMessage(response.data.message);
                // setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                // setMessage(resMessage);
                // setSuccessful(false);
            }
        );
    };

    return (
        <div className="Login">
            <h1 className="page-title">
                Inscription
            </h1>

            <form>
                <Input
                    value={username}
                    placeholder="Nom d'utilisateur"
                    name="username"
                    onChange={onChangeUsername}
                />
                <Input
                    value={email}
                    placeholder="Adresse e-mail"
                    name="email"
                    type={"email"}
                    onChange={onChangeEmail}
                />
                <Input
                    value={password}
                    placeholder="Mot de passe"
                    name="password"
                    type={"password"}
                    onChange={onChangePassword}
                />
                <Input
                    value={passwordRepeat}
                    placeholder="Confirmer le mot de passe"
                    name="password-bis"
                    type={"password"}
                    onChange={onChangePasswordRepeat}
                />
                <div className="link-container">
                    Déja un compte ? <Link to={"/login"}>Se connecter</Link>
                </div>
            </form>

            <div className="button-container">
                <Button onClick={handleRegister}>S'inscrire</Button>
            </div>
        </div>
    )
}

export default Register
