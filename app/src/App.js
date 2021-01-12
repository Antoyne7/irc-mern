import './styles/App.css';
import {Switch, Route} from "react-router-dom";

import Login from './pages/auth/login'
import Register from "./pages/auth/register";
import NewChannel from "./pages/channel/new-channel";
import Channels from "./pages/channel/channel";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route exact path={["/home", "/channels"]}>
                    <Channels />
                </Route>
                <Route path="/channels/new">
                    <NewChannel />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
