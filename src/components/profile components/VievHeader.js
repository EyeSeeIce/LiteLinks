import React, {useState} from 'react';
import classes from './VievHeader.module.css'
import Avatar from "../Avatar";
import useField from "../../Hooks/checkField";
import Paper from "../MyCustomComponents/Paper";
import AddToHomeScreen from "@ideasio/add-to-homescreen-react/build/AddToHomeScreen";

const ViewHeader = ({data, theme}) => {
    const [copy, setCopy] = useState(false)
    const check = useField
    const {status, photo, name, secondName, middleName, work, position} = data.userInfo
    const style = {
        default: {
            background: '#4a5bb897',
        },
        copied:{
            background: '#6fa94797',
        }
    }
    const click = e =>{
        let a = window.location.href
        navigator.clipboard.writeText(a)
            .then(() => {
                setCopy(true)
            })

    }
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
                <div className={classes.copyLink}>
                    <span onClick={click} style={copy ? style.copied : style.default}>{copy ? 'Ссылка скопирована' : 'Копировать ссылку' }</span>
                    {/*<span style={style.default}>Сохранить ярлык</span>*/}

                </div>
            </div>
        </Paper>
    );
};

export default ViewHeader;
