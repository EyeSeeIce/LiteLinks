import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {firebase} from "../Firebase";
import {getData, getUid} from "../redux/actions/actions";
import classes from './settings.module.css'
import SidePanel from "./SidePanel";
import MainSettingsBlock from "./MainSettingsBlock";
import SecondarySettingsBlock from "./SecondarySettingsBlock";
import BlockProperties from "./BlockProperties";
import CustomBlocks from "./CustomBlocks";

const Settings = ({getData, history}) => {
    let dispatch = useDispatch()
    const [activeBlock, setActiveBlock] = useState('customBlocks')
    const uid = useSelector(state => state.login.uid)
    console.log(uid)
    firebase.auth().onAuthStateChanged(user => {
        if(user !== null){
            dispatch(getUid(user.uid))
        }else{
            history.push('/')
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
            case 'blockSettings':
                return <BlockProperties />
            case 'customBlocks':
                return <CustomBlocks />
        }
    }
    return (
        <div className={classes.wrapper}>
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
