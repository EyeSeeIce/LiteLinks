import React, {useState} from 'react'
import {Switch, Router, Route, Redirect} from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Workspace from "./components/Workspace";
import Steep1 from "./components/Steep1";
import Steep2 from "./components/Steep2";
import Settings from "./components/Settings";

function App() {
    const [redirect, setRedirect] = useState()
    return (
        <div>
            {/*<Redirect to={redirect} />*/}
            <Switch>
                <Route exact path={'/'} component={() => <MainPage setRedirect={setRedirect} />}/>
                <Route exact path={'/login'} render={() => <Login setRedirect={setRedirect}/>}/>
                <Route exact path={'/signup'} render={() => <SignUp setRedirect={setRedirect}/>}/>
                <Route exact path={'/steep1'} render={() => <Steep1 setRedirect={setRedirect}/>}/>
                <Route exact path={'/steep2'} render={() => <Steep2 setRedirect={setRedirect}/>}/>
                <Route exact path={'/settings'} render={() => <Settings setRedirect={setRedirect}/>}/>
                <Route exact path={'/workspace'} render={() => <Workspace setRedirect={setRedirect}/>}/>
            </Switch>
        </div>
    );
}

export default App;
