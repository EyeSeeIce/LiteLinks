import React, {useState} from 'react';
import classes from "./settings.module.css";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import {map} from 'underscore'
import {firebase} from "../Firebase";


const SidePanel = ({setActiveBlock}) => {
    const [sidePanelState, setSidePanelState] = useState(false)
    const style = {
        open: {
            transform: 'translateX(0)'
        },
        close: {
            transform: 'translateX(-90%)'
        }
    }
    const openSidePanel = e => {
        setSidePanelState(!sidePanelState)
    }
    const setBlock = e => {
        setActiveBlock(e)
    }
    const buttons = [
        {
            title: 'Main Contacts',
            value: 'mainContacts'
        },
        {
            title: 'Secondary Contacts',
            value: 'secondaryContacts'
        },
        {
            title: 'Third Contacts',
            value: 'blockSettings'
        },{
            title: 'Custom Blocks',
            value: 'customBlocks'
        },]
    const click = e =>{
    firebase.auth().signOut()
    }
    return (
        <div>
            <div style={sidePanelState ? style.open : style.close} className={classes.sidePanelWrapper}>
                {map(buttons, q => <div onClick={() => setBlock(q.value)}>{q.title}</div>)}
                <div onClick={openSidePanel}>
                    {sidePanelState ? <ChevronLeft className={classes.open}/> :
                        <ChevronRight className={classes.open}/>}
                </div>
                <div onClick={click}>LogOut</div>
            </div>
        </div>
    );
};

export default SidePanel;
