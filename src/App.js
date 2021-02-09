import React, {useState} from 'react'
import {Switch, Router, Route, Redirect, useHistory} from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Steep1 from "./components/Steep1";
import Steep2 from "./components/Steep2";
import Settings from "./components/Settings";
import MainProfileComponent from "./components/profile components/MainProfileComponents";

function App() {
    let history = useHistory()
    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={() => <MainPage history={history} />}/>
                <Route exact path={'/login'} render={() => <Login history={history}/>}/>
                <Route exact path={'/steep1'} render={() => <Steep1 history={history}/>}/>
                <Route exact path={'/steep2'} render={() => <Steep2 history={history}/>}/>
                <Route exact path={'/settings'} render={() => <Settings history={history}/>}/>
                <Route exact path={'/profile/:id'} component={MainProfileComponent}/>
            </Switch>
        </div>
    );
}

export default App;
