import React, {useEffect, useRef, useState} from 'react';
import JustWrapper from "./MyCustomComponents/JustWrapper";
import {useDispatch, useSelector} from "react-redux";
import Switch from "@material-ui/core/Switch";
import {changeBlock, changeData} from "../redux/actions/actions";
import {firebase} from "../Firebase";
import classes from "./SecondarySettingsBlock.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const BlockProperties = () => {
    let data = useSelector(state => state.data.block)
    let userInfo = useSelector(state => state.data.userInfo)
    let uid = useSelector(state => state.login.uid)
    let blocks = []
    let dispatch = useDispatch()
    let what = useRef()
    let for_ = useRef()
    for (let key in data) {
        blocks.push({
            key,
            value: data[key]
        })
    }
    const changeSwitch = (e, id) => {
        firebase.database().ref(`users/${uid}/block/${e.target.name}`).set(e.target.checked)
    }
    const changeTheme = e =>{
        firebase.database().ref(`users/${uid}/userInfo/theme`).set((e.target.value).toLowerCase())
    }
    return (
        <JustWrapper>
            {blocks.map((item, index) => {
                return (
                    <div key={item.key}>
                        {item.key}
                        <Switch onChange={e => changeSwitch(e, index)} name={item.key} checked={item.value} color="primary"
                                inputProps={{'aria-label': 'primary checkbox'}}/>
                    </div>
                )
            })}
            <FormControl variant="outlined" className={classes.select}>
                <InputLabel htmlFor="outlined-age-native-simple">Links</InputLabel>
                <Select onChange={e => changeTheme(e)} native label="Links">
                    <option selected={userInfo.theme === 'dark' && true} defaultValue='dark'>Dark</option>
                    <option selected={userInfo.theme === 'light' && true} defaultValue='light'>Light</option>
                </Select>
            </FormControl>
        </JustWrapper>
    );
};

export default BlockProperties;
