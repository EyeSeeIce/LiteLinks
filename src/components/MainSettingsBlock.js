import React, {Fragment, useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import FormWrapper from "./FormWrapper";
import {useDispatch, useSelector} from "react-redux";
import {changeData, updateMainData} from "../redux/actions/actions";
import Avatar from "./Avatar";
import JustWrapper from "./JustWrapper";

const MainSettingsBlock = () => {
    const userInfo = useSelector(state => state.data.userInfo)
    const uid = useSelector(state => state.login.uid)
    console.log(userInfo)
    useEffect(() => {
        if (uid){
            console.log('true')
        }
    }, [uid])
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
        <Fragment>
            {userInfo ? <JustWrapper>
                {/*Photo*/}
                <Avatar changeHandler={changeHandler} settings status={userInfo ? userInfo.status : null} img={userInfo && userInfo.photo}/>
                {/*Main info*/}
                <div>
                    <FormWrapper submit={submit}>
                        <TextField onChange={(e) => changeHandler(e)} value={userInfo.name} name='name' id="outlined-basic"
                                   label="First Name" variant="outlined"/>
                        <TextField onChange={(e) => changeHandler(e)} value={userInfo.secondName}name='secondName' id="outlined-basic"
                                   label="Second Name" variant="outlined"/>
                        <TextField onChange={(e) => changeHandler(e)} value={userInfo.middleName} name='middleName' id="outlined-basic"
                                   label="Last Name" variant="outlined"/>
                        <TextField disabled id="standard-disabled" label="Disabled" variant='outlined' value={userInfo.email} />
                        <TextField onChange={(e) => changeHandler(e)} value={userInfo.work} name='work' id="outlined-basic"
                                   label="Work Name" variant="outlined"/>
                        <TextField onChange={(e) => changeHandler(e)} value={userInfo.position} name='position' id="outlined-basic"
                                   label="Position Name" variant="outlined"/>
                        <button>Send</button>
                    </FormWrapper>
                </div>
            </JustWrapper> : <p>...loading</p>}
        </Fragment>
    );
};

export default MainSettingsBlock;
