import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {createUser, getUid} from "../redux/actions/actions";
import {connect, useDispatch} from 'react-redux'
import {firebase} from "../Firebase";
import FormWrapper from "./FormWrapper";

const Steep2 = ({history, createUser, name,status, photo, secondName, middleName, date, work, position, email, password, uid}) => {
    const [formState, setFormState] = useState(false)
    const dispatch = useDispatch()
    const submit = e => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password).then(r => {
            getUid(r.user.uid)
            console.log('qwe')
            history.push('/settings')
            firebase.database().ref(`users/${r.user.uid}/userInfo`).set({
                name,
                secondName,
                middleName,
                date,
                work,
                position,
                email,
                uid,
                status,
                photo
            })
        })

    }
    const changeHandler = e => {
        let name = e.target.name
        createUser({
            key: name,
            value: e.target.value
        })
    }
    return (
        <div>
            <FormWrapper submit={submit}>
                <TextField onChange={(e) => changeHandler(e)} name='email' required id="outlined-basic" label="Name"
                           variant="outlined"/>
                <TextField onChange={(e) => changeHandler(e)} name='password' required id="outlined-basic"
                           type='password' label="Password" variant="outlined"/>
                <button>Регистрация</button>
            </FormWrapper>
        </div>
    );
};
const mapDispatchToProps = {
    createUser
}
const mapStateToProps = state => {
    return {
        uid: state.login.uid || 'undefined',
        name: state.login.name || 'undefined',
        secondName: state.login.secondName || 'undefined',
        middleName: state.login.middleName || 'undefined',
        date: state.login.date || 'undefined',
        work: state.login.work || 'undefined',
        position: state.login.position || 'undefined',
        email: state.login.email,
        password: state.login.password,
        status: state.login.status,
        photo: "https://s3.amazonaws.com/thetech-production/images/web_photos/web/4429_image_not_found.png?1460712165"

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Steep2);
