import './styles/App.css';
import {Switch, Route} from "react-router-dom";

import Login from './pages/login/login'
import Register from "./pages/register/register";

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
                <Route path="/channels">
                    <Register/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
