import React, {useEffect, useState} from "react";

import "./login.styles.scss"
import Input from "../../components/input/input";
import {Link} from "react-router-dom";

const Login = () => {

    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")

    useEffect(() => {
        console.log(value)
    }, [value])
    // https://fr.reactjs.org/docs/forms.html#handling-multiple-inputs
    return (
        <div className="Login">
            <h1 className="page-title">
                Connexion
            </h1>

            <form>
                <Input
                    value={value}
                    placeholder={"Nom d'utilisateur"}
                    name={"name"}
                />

                <Input
                    value={value2}
                    placeholder={"Mot de passe"}
                    name={"name"}
                />
            </form>

            <Link to={"/register"}>Créer un compte</Link>
        </div>
    )
}

export default Login
