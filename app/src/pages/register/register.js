import React, {useEffect, useState} from "react";

import "../login/login.styles.scss"
import Input from "../../components/input/input";
import {Link} from "react-router-dom";
import Button from "../../components/button/button";

const Register= () => {

    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")

    useEffect(() => {
        console.log(value)
    }, [value])
    return (
        <div className="Login">
            <h1 className="page-title">
                Inscription
            </h1>

            <form>
                <Input
                    value={value}
                    placeholder="Nom d'utilisateur"
                    name="username"
                />
                <Input
                    value={"oui"}
                    placeholder="Adresse e-mail"
                    name="email"
                />
                <Input
                    value={value2}
                    placeholder="Mot de passe"
                    name="password"
                />
                <Input
                    value={value}
                    placeholder="Confirmer le mot de passe"
                    name="password-bis"
                />
                <div className="link-container">
                    Déja un compte ? <Link to={"/register"}>Se connecter</Link>
                </div>
            </form>

            <div className="button-container">
                <Button>S'inscrire</Button>
            </div>
        </div>
    )
}

export default Register
