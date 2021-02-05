import React from 'react';
import {NavLink} from "react-router-dom";
import {firebase} from "../Firebase";
import { connect } from 'react-redux'
import {createUser, getUid} from "../redux/actions/actions";

const mainPage = ({ getUid, uid, setRedirect, history}) => {
    uid && setRedirect('/workspace')
    firebase.auth().onAuthStateChanged(user => {
        if (user){
            getUid(user.uid)
            history.push('/settings')
        }else{
            history.push('/')
        }
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
