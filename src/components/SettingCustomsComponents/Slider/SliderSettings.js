import React, {useRef} from 'react';
import Alert from "@material-ui/lab/Alert";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {addImgToDb} from "../../../redux/actions/actions";

const SliderSettings = () => {
    let url = useRef()
    let dispatch = useDispatch()
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
        </div>
    );
};

export default SliderSettings;
