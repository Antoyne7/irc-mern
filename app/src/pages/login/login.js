import React, {useEffect, useState} from "react";

import "./login.styles.scss"
import Input from "../../components/input/input";

const Login = () => {

    const [value, setValue] = useState("")

    useEffect(() => {
        console.log(value)
    }, [value])
    // https://fr.reactjs.org/docs/forms.html#handling-multiple-inputs
    return (
        <div className="Login">
            <h1 className="page-title">
                Connexion
            </h1>

            <div>
                <Input value={value} />
            </div>
        </div>
    )
}

export default Login
