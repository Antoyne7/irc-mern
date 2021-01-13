import React from "react";
import "./channel.styles.scss"

import Navigation from "../navigation/navigation";
import Button from "../button/button";
import Input from "../input/input"

const Profile = () => {

    return (
        <div className="channel-content-container">
            <div className="title-container container">
                <h2>Profil</h2>
            </div>
            <Navigation />
            <form>
                <div className="form-title">
                    <h3>
                        Vos informations
                    </h3>

                    del
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
            <Button>
                Enregistrer
            </Button>
        </div>
    )
};

export default Profile
