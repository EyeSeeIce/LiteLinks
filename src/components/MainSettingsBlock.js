import React, {Fragment, useEffect, useRef, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import FormWrapper from "./MyCustomComponents/FormWrapper";
import {useDispatch, useSelector} from "react-redux";
import {changeData, updateMainData} from "../redux/actions/actions";
import Avatar from "./Avatar";
import JustWrapper from "./MyCustomComponents/JustWrapper";
import {firebase} from "../Firebase";

const MainSettingsBlock = () => {
    const userInfo = useSelector(state => state.data.userInfo)
    const [files, setFiles] = useState()
    const uid = useSelector(state => state.login.uid)
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
    const blurPhoto = e =>{
        let storageRef = firebase.storage().ref();
        storageRef.child(`/users/${uid}/avatar.jpg`).put(e.target.files[0])
            .then(snp => {
                storageRef.child(`/users/${uid}/avatar.jpg`).getDownloadURL()
                    .then(url => {
                        dispatch(changeData({name: 'photo', value: url}))
                        firebase.database().ref(`/users/${uid}/userInfo/photo`).set(url)
                    })
            })
    }
    console.log(files)
    return (
        <Fragment>
            {userInfo ? <JustWrapper>
                {/*Photo*/}
                <label htmlFor="file"><Avatar changeHandler={changeHandler} settings status={userInfo ? userInfo.status : null} img={userInfo && userInfo.photo}/></label>
                <input ref={files} style={{
                    position: 'absolute',
                    zIndex: -1,
                    opacity: 0,
                    width: '0.1em',
                    height: '0.1em'
                }} id='file' onChange={(e) => blurPhoto(e)} type="file"/>
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
