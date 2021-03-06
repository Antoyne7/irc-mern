import './styles/App.css';
import { Switch, Route } from "react-router-dom";

import Login from './pages/auth/login'
import Register from "./pages/auth/register";
import NewChannel from "./pages/channel/new-channel";
import Channels from "./pages/channel/channel";
import LoginGuest from "./pages/auth/login_guest"
import React from "react";
import Profile from "./pages/profile/profile";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={["/", "/login_guest"]}>
                    <LoginGuest />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/new-channel">
                    <NewChannel />
                </Route>
                <Route path={"/home"}>

                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path={["/channels/:channel"]} >
                    <Channels />
                </Route>
            </Switch>
            <div className="modal-container" />
        </div>
    );
}

export default App;
