import React, {useState} from "react";

import Input from "../input/input";
import Button from "../button/button";

import "./createChannel.style.scss"

const CreateChannel = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangePasswordRepeat = (e) => {
        const passwordRepeat = e.target.value;
        setPasswordRepeat(passwordRepeat);
    };

    const handleCreation = (e) => {
        e.preventDefault();
        console.log("cool", name, password, passwordRepeat)
        // setMessage("");
        // setSuccessful(false);
        /*AuthService.register(username, email, password, passwordRepeat).then(
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
        );*/
    };

    return (
        <div className="CreateChannel">
            <form action="">
                <Input
                    placeholder="Nom du salon"
                    name="channel-name"
                    value={name}
                    onChange={onChangeName}
                />
                <Input
                    placeholder="Mot de passe"
                    name="channel-password"
                    value={password}
                    onChange={onChangePassword}
                />
                <Input
                    placeholder="Confirmez le mot de passe"
                    name="channel-password-repeat"
                    value={passwordRepeat}
                    onChange={onChangePasswordRepeat}
                />
                <div className="button-container">
                    <Button onClick={handleCreation} theme="secondary">
                        Créer
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default CreateChannel
