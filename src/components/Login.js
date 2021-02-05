import React, {useRef} from 'react';
import {Redirect, NavLink} from "react-router-dom";
import {firebase} from "../Firebase";
import { connect } from "react-redux";
import {loginReducer} from "../redux/reducers/loginReducer";
import {getUid} from "../redux/actions/actions";
import { createBrowserHistory } from 'history';

const Login = (props) => {
    let history = createBrowserHistory()
    const login = useRef()
    const password = useRef()
    const submit = e =>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(login.current.value, password.current.value).then(r => {
            if (r){
                props.getUid(r.user.uid)
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                history.push('/settings')
            }
        })
    }
    return (
        <div>
            <form action="" onSubmit={(e) => submit(e)}>
                <div><input ref={login} name='login' type="text" placeholder='login' /></div>
                <div><input ref={password} name="password" type="text"  placeholder='password'/></div>
                <button>Войти</button>
                <div><em>Нет аккаунта? <NavLink to={'/steep1'}>Создать</NavLink></em></div>
            </form>
        </div>
    );
};
const mapDispatchToProps = {
    getUid
}
export default connect(null, mapDispatchToProps)(Login)
