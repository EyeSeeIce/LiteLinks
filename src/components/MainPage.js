import React from 'react';
import {NavLink} from "react-router-dom";
import {firebase} from "../Firebase";
import { connect } from 'react-redux'
import {createUser, getUid} from "../redux/actions/actions";

const mainPage = ({ getUid, uid, setRedirect}) => {
    uid && setRedirect('/workspace')
    firebase.auth().onAuthStateChanged(user => {
        getUid(user.uid)
    })

    return (
        <div>
            <div><NavLink to={'/login'} >Войти</NavLink></div>
            <div><NavLink to={'/Settings'} >Настройки</NavLink></div>
        </div>
    );
};

const mapDispatchToProps = {
    getUid
}
export default connect(null, mapDispatchToProps)(mainPage);
