import React from 'react';
import classes from './VievHeader.module.css'
import Avatar from "../Avatar";
import useField from "../../Hooks/checkField";
import Paper from "../MyCustomComponents/Paper";

const ViewHeader = ({data, theme}) => {
    const check = useField
    const {status, photo, name, secondName, middleName, work, position} = data.userInfo
    return (
        <Paper theme={theme} header>
            <div className={classes.wrapper}>
                <div className={classes.photo}>
                    <Avatar theme={theme} status={status} img={photo}/>
                </div>
                <div className={classes.info}>
                    {/*Фамилия Имя Отчество Возраст*/}
                    <div className={classes.title}>
                        <span>{check(secondName)} {check(name)} {check(middleName)}</span>
                    </div>
                    {/*Место работы и должность*/}
                    <div className={classes.info}>
                        <div className={classes.subTitle}>
                            <div>Место работы</div>
                            <div>{check(work)}</div>
                        </div>
                        <div className={classes.subTitle}>
                            <div>Должность</div>
                            <div>{check(position)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default ViewHeader;
