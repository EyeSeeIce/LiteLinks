import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {NavLink} from "react-router-dom";
import classes from './steeps.module.css'
import {connect} from "react-redux";
import {createUser, getUid} from "../redux/actions/actions";

const Steep1 = ({setRedirect, createUser}) => {
    const [formState, setFormState] = useState(false)
    const submit = e => {
        e.preventDefault()
        setRedirect('/steep2')
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
            <form className={classes.form} action="" onSubmit={e => submit(e)}>
                <TextField onChange={(e) => changeHandler(e)} name='name' required id="outlined-basic" label="Name" variant="outlined"/>
                <TextField onChange={(e) => changeHandler(e)} name='secondName' required id="outlined-basic" label="Second Name" variant="outlined"/>
                <TextField onChange={(e) => changeHandler(e)} name='middleName' id="outlined-basic" label="Middle Name" variant="outlined"/>
                <TextField onChange={(e) => changeHandler(e)} name='date' id="date" label="Birthday" type="date" defaultValue="2017-05-24"/>
                <TextField onChange={(e) => changeHandler(e)} name='work' id="outlined-basic" label="Work" variant="outlined"/>
                <TextField onChange={(e) => changeHandler(e)} name='position' id="outlined-basic" label="Position" variant="outlined"/>
                <button >Клик</button>
            </form>
        </div>
    );
};
const mapDispatchToProps = {
    createUser
}
export default connect(null, mapDispatchToProps)(Steep1);
