import React from 'react';
import classes from './VievHeader.module.css'
import Avatar from "../Avatar";
import useField from "../../Hooks/checkField";
import Paper from "../MyCustomComponents/Paper";

const ViewHeader = ({data}) => {
    const check = useField

    const {status, photo, name, secondName, middleName, work, position} = data.userInfo
    return (
        <Paper header className={classes.wrapper}>
            <div className={classes.photo}>
                <Avatar status={status} img={photo} />
            </div>
            <div className={classes.info}>
                {/*Фамилия Имя Отчество Возраст*/}
                <div className={classes.title}>
                    <span>{check(secondName)} {check(name)} {check(middleName)}</span>
                </div>
                {/*Место работы и должность*/}
                <div className={classes.info}>
                    <span>{check(work)} {check(position)}</span>
                </div>
            </div>
        </Paper>
    );
};

export default ViewHeader;
