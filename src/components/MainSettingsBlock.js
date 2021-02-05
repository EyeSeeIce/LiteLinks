import React, {useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import FormWrapper from "./FormWrapper";
import {useDispatch, useSelector} from "react-redux";
import {changeData, updateMainData} from "../redux/actions/actions";
import Avatar from "./Avatar";
import JustWrapper from "./JustWrapper";

const MainSettingsBlock = () => {
    const userInfo = useSelector(state => state.data.userInfo)
    const uid = useSelector(state => state.login.uid)
    const dispatch = useDispatch()
    const changeHandler = e => {
        dispatch(changeData({name: e.target.name, value: e.target.value}))
    }
    const submit = e => {
        e.preventDefault()
        dispatch(updateMainData({
            data: userInfo,
            uid
        }))
    }

    return (
        <JustWrapper>
            {/*Photo*/}
            <Avatar status='Привет' img={userInfo && userInfo.photo}/>
            {/*Status*/}
            <div></div>
            {/*Main info*/}
            <div>
                <FormWrapper submit={submit}>
                    <TextField onChange={(e) => changeHandler(e)} value={userInfo ? userInfo.name : '...loading'} name='name' id="outlined-basic"
                               label="First Name" variant="outlined"/>
                    <TextField onChange={(e) => changeHandler(e)} value={userInfo ? userInfo.secondName : '...loading'} name='secondName' id="outlined-basic"
                               label="Second Name" variant="outlined"/>
                    <TextField onChange={(e) => changeHandler(e)} value={userInfo ? userInfo.middleName : '...loading'} name='middleName' id="outlined-basic"
                               label="Last Name" variant="outlined"/>
                    <TextField disabled id="standard-disabled" label="Disabled" variant='outlined' value={userInfo ? userInfo.email : '...loading'} />
                    <TextField onChange={(e) => changeHandler(e)} value={userInfo ? userInfo.work : '...loading'} name='work' id="outlined-basic"
                               label="Work Name" variant="outlined"/>
                    <TextField onChange={(e) => changeHandler(e)} value={userInfo ? userInfo.position : '...loading'} name='position' id="outlined-basic"
                               label="Position Name" variant="outlined"/>
                               <button>Send</button>
                </FormWrapper>
            </div>
        </JustWrapper>
    );
};

export default MainSettingsBlock;
