import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {createUser, getUid} from "../redux/actions/actions";
import { connect } from 'react-redux'
import {firebase} from "../Firebase";
import FormWrapper from "./FormWrapper";
const Steep2 = ({setRedirect, createUser, name, secondName, middleName, date, work,position,email, password, uid}) => {
    const [formState, setFormState] = useState(false)
    const submit = e =>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password).then(r => {
            getUid(r.user.uid)
            firebase.database().ref(`users/${r.user.uid}/userInfo`).set({
                name,
                secondName,
                middleName,
                date,
                work,
                position,
                email,
                uid
            })
        })

    }
    const changeHandler = e =>{
        let name = e.target.name
        createUser({
            key: name,
            value: e.target.value
        })
    }
    return (
        <div>
            <FormWrapper submit={submit}>
                <TextField onChange={(e) => changeHandler(e)} name='email' required id="outlined-basic" label="Name" variant="outlined"/>
                <TextField onChange={(e) => changeHandler(e)} name='password' required id="outlined-basic" type='password' label="Password" variant="outlined" />
                <button>Регистрация</button>
            </FormWrapper>
        </div>
    );
};
const mapDispatchToProps = {
    createUser
}
const mapStateToProps = state => {
    return{
        uid: state.login.uid,
        name: state.login.name,
        secondName: state.login.secondName,
        middleName: state.login.middleName,
        date: state.login.date,
        work: state.login.work,
        position: state.login.position,
        email: state.login.email,
        password: state.login.password

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Steep2);
