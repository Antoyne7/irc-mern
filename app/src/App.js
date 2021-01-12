import './styles/App.css';
import {Switch, Route} from "react-router-dom";

import Login from './pages/auth/login'
import Register from "./pages/auth/register";
import Home from "./pages/home/home";
import LoginGuest from "./pages/auth/login_guest"
import React from "react";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={["/", "/login_guest"]}>
                    <LoginGuest/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/channels">
                    <Register/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
