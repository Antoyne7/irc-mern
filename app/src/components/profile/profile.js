import React, {useState, useRef} from "react";
import "./profile.style.scss"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

import Navigation from "../navigation/navigation";
import Button from "../button/button";
import Input from "../input/input"

const Profile = () => {
    const pictureInput = useRef()

    const [picture, setPicture] = useState(null);
    const [picturePreview, setPicturePreview] = useState(null);
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
        setPicture(e.target.files[0]);
        setPicturePreview(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = () => {
        const data = new FormData();
        data.append('picture', picture);

        console.log("picture", picture)
        console.log("username", username)
        console.log("password", password)
        console.log("passwordRepeat", passwordRepeat)
        console.log("oldPassword", oldPassword)
    }

    return (
        <div className="Profile">
            <div className="title-container container">
                <h2>Profil</h2>
            </div>
            <Navigation/>
            <form>
                <div className="form-title">
                    <h3>
                        Vos informations
                    </h3>

                    <FontAwesomeIcon icon={faTrash} color={"var(--red)"}/>
                </div>

                <div className="profile-picture-container">
                    <div className="profile-picture">
                        {picturePreview && <img src={picturePreview} alt="Profile picture"/>}
                    </div>
                    <label htmlFor="profile-picture">
                        <FontAwesomeIcon icon={faEdit} size="2x" color="var(--contrast-projet)"/>
                    </label>
                    <input ref={pictureInput} id="profile-picture" type="file" onChange={onChangePicture}/>
                </div>

                <Input
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={onChangeUsername}
                />
                <Input
                    placeholder="Mot de passe"
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
