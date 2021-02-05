import React, {useRef} from 'react';
import {firebase} from "../Firebase";
import {NavLink} from "react-router-dom";
import {getUid} from "../redux/actions/actions";
import {connect} from "react-redux";
import { createBrowserHistory } from 'history';


const SignUp = (props) => {
    let history = createBrowserHistory()
    const login = useRef()
    const password = useRef()
    const submit = e =>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(login.current.value, password.current.value).then(r => {
            if (r){
                props.getUid(r.user.uid)
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                props.setRedirect('/workspace')
            }
        })
    }
    return (
        <div>
            <form action="" onSubmit={(e) => submit(e)}>
                <div><input ref={login} name='login' type="text" placeholder='login' /></div>
                <div><input ref={password} name="password" type="text"  placeholder='password'/></div>

                <button>Создать</button>
                <div><em><NavLink to={'/login'}>Вернуться</NavLink></em></div>
            </form>
        </div>
    );
};
const mapDispatchToProps = {
    getUid
}
export default connect(null, mapDispatchToProps)(SignUp)
