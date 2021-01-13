import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import Input from "../input/input";
import Button from "../button/button";
import authHeader from "../../services/auth-header";

import "./createChannel.style.scss"
import axios from "axios";
import param from "../../services/param";

const CreateChannel = () => {
    const history = useHistory();
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
        const user = JSON.parse(localStorage.getItem("user"));
        const username = user.user.username;
        const slug = name;

        axios.post(param.channel.add,
            {name, slug, password, passwordRepeat, username}, {headers: authHeader()})
            .then((response) => {
                console.log(response);
                //TODO: ajouter une animation à la fin de l'ajout
                history.push({
                    pathname: '/channels/' + response.data.slug,
                    state: {channel: response.data.slug}
                })
            }).catch(e => {
            console.log(e)
        });
        console.log("cool", name, password, passwordRepeat)

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
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                />
                <Input
                    placeholder="Confirmez le mot de passe"
                    name="channel-password-repeat"
                    type="password"
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
