import React, {useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import {firebase} from "../Firebase";
import {connect} from "react-redux";
import {getUid} from "../redux/actions/actions";
import {createBrowserHistory} from 'history';
import JustWrapper from "./MyCustomComponents/JustWrapper";
import FormWrapper from "./MyCustomComponents/FormWrapper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import classes from './Login.module.css'
import Paper from "./MyCustomComponents/Paper";

const Login = (props) => {
    const [type, setTpe] = useState(false)
    let history = createBrowserHistory()
    const login = useRef()
    const password = useRef()
    const submit = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(login.current.value, password.current.value).then(r => {
            if (r) {
                props.getUid(r.user.uid)
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                history.push('/settings')
            }
        })
    }
    return (
        <div className={classes.wrapper}>
                <FormWrapper submit={submit}>
                    <TextField inputRef={login} name='email' required id="outlined-basic" label="E-mail"
                               variant="outlined"/>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            required
                            inputRef={password}
                            id="outlined-adornment-password"
                            type={type ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setTpe(!type)}
                                                aria-label="toggle password visibility"
                                                edge="end">
                                        {type ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <button>Войти</button>
                    <div><em>Нет аккаунта? <NavLink to={'/steep1'}>Создать</NavLink></em></div>
                </FormWrapper>
        </div>
    );
};
const mapDispatchToProps = {
    getUid
}
export default connect(null, mapDispatchToProps)(Login)
