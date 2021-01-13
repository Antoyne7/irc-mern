import React from "react";
import "./profile.style.scss"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

import Navigation from "../navigation/navigation";
import Button from "../button/button";
import Input from "../input/input"

const Profile = () => {

    return (
        <div className="Profile">
            <div className="title-container container">
                <h2>Profil</h2>
            </div>
            <Navigation />
            <form>
                <div className="form-title">
                    <h3>
                        Vos informations
                    </h3>

                    <FontAwesomeIcon icon={faTrash} color={"var(--red)"}/>
                </div>

                <div className="profile-picture">

                </div>

                <Input
                    placeholder="Nom d'utilisateur"
                />
                <Input
                    placeholder="Mot de passe"
                />
                <Input
                    placeholder="Confirmez le mot de passe"
                />
                <Input
                    placeholder="Ancien mot de passe"
                />
            </form>
            <div className="button-container">
                <Button>
                    Enregistrer
                </Button>
            </div>
        </div>
    )
};

export default Profile
