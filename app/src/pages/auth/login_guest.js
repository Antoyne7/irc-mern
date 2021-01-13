import React, {useState} from "react"
import Button from "../../components/button/button"
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";

import AuthService from "../../services/auth.service";


const LoginGuest = () => {
    const history = useHistory();

    const [username, setUsername] = useState("");

    const changeUsername = (evt) => {
        setUsername(evt.target.value);
    };
    const createAccount = (evt) => {
        evt.preventDefault();

        AuthService.guest_login(username).then(
            () => {
                // TODO: redirect
                console.log("Redirect page", AuthService.getCurrentUser())
                history.push("/channels/add");
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
    };

    return (
        <div className="guest-login">
            <h1>Herobrine</h1>
            <form onSubmit={(evt) => createAccount(evt)} className="form">
                <h2>Rejoindre en tant qu'invité</h2>
                <input onChange={(evt) => changeUsername(evt)} placeholder="Nom d'utilisateur"/>
            </form>

            <div className="button-container">
                <Button onClick={(evt) => createAccount(evt)}>Commencer</Button>
            </div>
            <div className="separator">
                <span>ou</span>
                <hr/>
            </div>
            <div className="buttons-container">
                <Button borderOnly={true}>Se connecter</Button>
                <Link to={"/register"}>
                    <Button onClick={null} borderOnly={true}>S'inscrire</Button>
                </Link>
            </div>
        </div>
    )
}
export default LoginGuest
