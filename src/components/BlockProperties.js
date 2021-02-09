import React, {useEffect, useRef, useState} from 'react';
import JustWrapper from "./MyCustomComponents/JustWrapper";
import {useDispatch, useSelector} from "react-redux";
import Switch from "@material-ui/core/Switch";
import {changeBlock, changeData} from "../redux/actions/actions";
import {firebase} from "../Firebase";

const BlockProperties = () => {
    let data = useSelector(state => state.data.block)
    let data2 = useSelector(state => state.data.swap)
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
        </JustWrapper>
    );
};

export default BlockProperties;
