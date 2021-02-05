import React, {useRef} from 'react';
import classes from './Workspace.module.css'

import { connect } from "react-redux";
import {activeNav, createNote} from "../redux/actions/actions";
import {firebase} from "../Firebase";

const Workspace = (props) => {
    const input = useRef()
    const clickHandler = (type) =>{
        switch (type){
            case 'create':
                props.activeNav('create')
                break
        }
    }
    const submit = e =>{
        e.preventDefault()
        props.createNote(input.current.value)

    }
    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.noteList}>
                    <h5>Notes List</h5>
                    <button onClick={() => clickHandler('create')}>New Note</button>
                </div>
                <div className={classes.createNote}>
                    <h3>Create Note</h3>
                    <form action="" onSubmit={e => submit(e)}>
                        <input ref={input} type="text"/>
                        <button>Create</button>
                    </form>
                    <div>{props.notes && props.notes.map(item => <div>{item.text}</div>)}</div>
                </div>
                <button onClick={() => firebase.auth().signOut()}>Выйти</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        notes: state.notes.notes
    }
}
const mapDispatchToProps = {
    activeNav,
    createNote
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
