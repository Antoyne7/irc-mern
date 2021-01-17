import React, { useState, useRef, useEffect } from "react";
import "./profile.style.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

import Navigation from "../navigation/navigation";
import Button from "../button/button";
import Input from "../input/input"
import axios from "axios";
import param from "../../services/param";
import authHeader from "../../services/auth-header";
import UserService from "../../services/user"
import useUser from "../../services/use-user";

const Profile = () => {
    const pictureInput = useRef()
    const userState = useUser();

    useEffect(() => {
        setPicturePreview(UserService.getPicture(userState.user))
        setUsername(userState.user?.username)
    }, [userState])

    const [picturePreview, setPicturePreview] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangePasswordRepeat = (e) => {
        const passwordRepeat = e.target.value;
        setPasswordRepeat(passwordRepeat);
    };

    const onChangeOldPassword = (e) => {
        const oldPassword = e.target.value;
        setOldPassword(oldPassword);
    };

    const onChangePicture = (e) => {
        setPicturePreview(URL.createObjectURL(e.target.files[0]));

        const formData = new FormData();
        formData.append('picture', e.target.files[0]);
        axios.post(param.user.picture,
            formData,
            { headers: authHeader() },
        ).then(response => {
            console.log("response:", response)
        }).catch(err => console.log("error:", err))
    };

    const handleSubmit = () => {
        axios.post(param.user.profile,
            {
                username,
                password,
                passwordRepeat,
                oldPassword
            },
            { headers: authHeader() },
        ).then(response => {
            console.log("response:", response)
        }).catch(err => console.log("error:", err))
    }

    return (
        <div className="Profile">
            <div className="title-container container">
                <h2>Profil</h2>
            </div>
            <Navigation />
            <form encType="multipart/form-data">
                <div className="form-title">
                    <h3>
                        Vos informations
                    </h3>

                    <FontAwesomeIcon icon={faTrash} color={"var(--red)"} />
                </div>

                <div className="profile-picture-container">
                    <div className="profile-picture">
                        {picturePreview && <img src={picturePreview} alt="Profile" />}
                    </div>
                    <label htmlFor="profile-picture">
                        <FontAwesomeIcon icon={faEdit} size="2x" color="var(--contrast-projet)" />
                    </label>
                    <input ref={pictureInput} name="file" id="profile-picture" type="file" onChange={(evt) => onChangePicture(evt)} />
                </div>

                <Input
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={onChangeUsername}
                />
                <Input
                    placeholder="Nouveau mot de passe"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                />
                <Input
                    placeholder="Confirmez le mot de passe"
                    type="password"
                    value={passwordRepeat}
                    onChange={onChangePasswordRepeat}
                />
                <Input
                    placeholder="Ancien mot de passe"
                    type="password"
                    value={oldPassword}
                    onChange={onChangeOldPassword}
                />
            </form>
            <div className="button-container">
                <Button onClick={handleSubmit}>
                    Enregistrer
                </Button>
            </div>
        </div>
    )
};

export default Profile
