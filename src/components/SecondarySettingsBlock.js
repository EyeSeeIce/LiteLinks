import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import FormWrapper from "./MyCustomComponents/FormWrapper";
import JustWrapper from "./MyCustomComponents/JustWrapper";
import classes from './SecondarySettingsBlock.module.css'
import {firebase} from "../Firebase";
import { Alert } from "@material-ui/lab";
import {changeData} from "../redux/actions/actions";

const SecondarySettingsBlock = () => {
    const [error, setError] = useState(false)
    const [acceptedLink, setAcceptedLink] = useState('')
    const [contactType, setContactType] = useState('')
    let links = useSelector(state => state.data.linksTemplate)
    let uid = useSelector(state => state.login.uid)
    let data = useSelector(state => state.data.userInfo)
    let dispatch = useDispatch()
    const input = useRef()
    const inputContacts = useRef()
    const afterDot = useRef()
    const beforeDot = useRef()
    const textArea = useRef()
    let ar = []

    let contacts = ['phone', 'email']
    for (let key in links) {
        ar.push({
            key,
        })
    }
    const select = e => {
        setAcceptedLink(e.target.value)
    }
    const submit = e => {
        e.preventDefault()
        let a = `${links[acceptedLink]}${input.current.value}`
        firebase.database().ref(`/users/${uid}/socialLinks/${acceptedLink}`).set(a)
    }
    const submitContact = e => {
        e.preventDefault()
        let a
        if (contactType === 'phone'){
            a = `${inputContacts.current.value}`
            if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(a)){
                firebase.database().ref(`/users/${uid}/contacts/phone`).set({
                    value: a
                })
            }else{
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 5000)
            }
        }
    }
    const submitMessage = e => {
        e.preventDefault()
        firebase.database().ref(`users/${uid}/userInfo/message`).set(textArea.current.value)
    }
    const getContactBlock = e =>{
        switch (contactType){
            case "phone":
                return(
                    <div className={classes.links}>
                        <TextField  inputRef={inputContacts} placeholder='any number' name='name' id="outlined-basic"
                                   label="Ur number" variant="outlined"/>
                    </div>
                )
            case "email":
                return (
                    <div className={classes.links}>
                        <TextField inputRef={beforeDot} placeholder='any email' name='name' id="outlined-basic" variant="outlined"/>
                    </div>
                )
        }
    }
    return (
        <JustWrapper>
            {error ? <Alert severity="error">Some fields is undefined!</Alert> : null}
            <FormWrapper submit={(e) => submit(e)}>
                <div className={classes.linksWrapper}>
                    <FormControl variant="outlined" className={classes.select}>
                        <InputLabel htmlFor="outlined-age-native-simple">Links</InputLabel>
                        <Select onChange={(e) => select(e)}
                                native
                                label="Links"
                        >
                            <option hidden selected disabled aria-label="None"/>
                            {ar.map((item, index) => <option key={index} value={item.key}>{item.key}</option>)}
                        </Select>
                    </FormControl>
                    {acceptedLink ? <div className={classes.links}>
                        <span className={classes.template}>{links[acceptedLink]}</span>
                        <TextField inputRef={input} className={classes.link} name='name' id="outlined-basic"
                                   label="Ur data"
                                   variant="outlined"/>
                    </div> : null}
                </div>
                <button>Create</button>
            </FormWrapper>
            <FormWrapper submit={(e) => submitContact(e)}>
                <div className={classes.linksWrapper}>
                    <FormControl variant="outlined" className={classes.select}>
                        <InputLabel htmlFor="outlined-age-native-simple">Links</InputLabel>
                        <Select onChange={(e) => setContactType(e.target.value)} native label="Links">
                            <option hidden selected disabled aria-label="None"/>
                            {contacts.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </Select>
                    </FormControl>
                    {getContactBlock()}
                </div>
                <button>Create</button>
            </FormWrapper>
            Может хотите что-то сказать? :)
            <FormWrapper submit={(e) => submitMessage(e)}>
                <textarea ref={textArea} value={data.message} onChange={(e) => dispatch(changeData({name: 'message', value: e.target.value}))} placeholder='max length - 200' style={{resize: 'none', fontSize: '20px', padding: '5px'}} maxLength='200' name="" id="" cols="7" rows="5" />
                <button>Send</button>
            </FormWrapper>
        </JustWrapper>
    );
};

export default SecondarySettingsBlock;
