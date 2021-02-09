import React, {useEffect, useRef} from 'react';
import Alert from "@material-ui/lab/Alert";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {addImgToDb} from "../../../redux/actions/actions";
import Paper from "../../MyCustomComponents/Paper";
import SettingsSliderImages from "./SettingsSliderImages";

const SliderSettings = () => {
    let url = useRef()
    let dispatch = useDispatch()
    let slides = useSelector(state => state.data)
    let uid = useSelector(state => state.login.uid)
    const ar = []
    for (let key in slides.customBlock.slider){
        ar.push({
            key,
            value: slides.customBlock.slider[key]
        })
    }
    console.log(ar)
    const submit = e => {
        e.preventDefault()
        dispatch(addImgToDb(url.current.value))
        url.current.value = ''
    }
    return (
        <div>
            <Alert severity="warning">Временно работает только со ссылками</Alert>
            <form action="" onSubmit={e => submit(e)}>
                <Input fullWidth inputRef={url} placeholder="URL" inputProps={{'aria-label': 'description'}}/>
                <button>SEND</button>
            </form>
            <Paper>
                {ar.map(item => <SettingsSliderImages key={item.key} uid={uid} data={item} />)}
            </Paper>
        </div>
    );
};

export default SliderSettings;
