import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {firebase} from "../Firebase";
import {getData, getUid} from "../redux/actions/actions";
import classes from './settings.module.css'
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import {Router, Route} from "react-router-dom";
import SidePanel from "./SidePanel";
import MainSettingsBlock from "./MainSettingsBlock";
import SecondarySettingsBlock from "./SecondarySettingsBlock";

const Settings = ({setRedirect, getData, history}) => {
    useEffect(() => {

    }, [history])
    let dispatch = useDispatch()
    const [activeBlock, setActiveBlock] = useState('mainContacts')
    const uid = useSelector(state => state.login.uid)
    firebase.auth().onAuthStateChanged(user => {
        if(user !== null){
            dispatch(getUid(user.uid))
        }
    })
    useEffect(() => {
        getDataFromDataBase()
    }, [uid])
    const getDataFromDataBase = e => {
        getData(uid)
    }
    const getSettingsBlock = e => {
        switch (activeBlock){
            case 'mainContacts':
                return <MainSettingsBlock />
            case 'secondaryContacts':
                return <SecondarySettingsBlock />
        }
    }
    return (
        <div>
            <SidePanel setActiveBlock={setActiveBlock}/>
            {getSettingsBlock()}
        </div>
    );
};

const mapDispatchToProps = {
    getData
}
const mapStateToProps = state => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
