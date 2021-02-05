import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {Redirect, NavLink} from "react-router-dom";
import { createBrowserHistory } from "history";
import classes from './steeps.module.css'
import {connect} from "react-redux";
import {createUser, getUid} from "../redux/actions/actions";
import FormWrapper from "./FormWrapper";
import { useHistory } from "react-router-dom";

const Steep1 = ({setRedirect, createUser}) => {
    let history = useHistory()
    const [formState, setFormState] = useState(false)

    const changeHandler = e => {
        let name = e.target.name
        createUser({
            key: name,
            value: e.target.value
        })
    }
    const submit = e => {
        e.preventDefault()
        history.push('/steep2')
    }
    return (
        <div>
            <FormWrapper submit={submit} >
                <TextField onChange={(e) => changeHandler(e)} name='name' required id="outlined-basic" label="Name"
                           variant="outlined"/>
                <TextField onChange={(e) => changeHandler(e)} name='secondName' required id="outlined-basic"
                           label="Second Name" variant="outlined"/>
                <TextField onChange={(e) => changeHandler(e)} name='middleName' id="outlined-basic" label="Middle Name"
                           variant="outlined"/>
                <TextField onChange={(e) => changeHandler(e)} name='date' id="date" label="Birthday" type="date"
                           defaultValue="2017-05-24"/>
                <TextField onChange={(e) => changeHandler(e)} name='work' id="outlined-basic" label="Work"
                           variant="outlined"/>
                <TextField onChange={(e) => changeHandler(e)} name='position' id="outlined-basic" label="Position"
                           variant="outlined"/>
                <button>Клик</button>
            </FormWrapper>
        </div>
    );
};
const mapDispatchToProps = {
    createUser
}
export default connect(null, mapDispatchToProps)(Steep1);
