import React, {useRef} from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {addCoordToDB} from "../../../redux/actions/actions";

const Map = () => {
    let lat = useRef() //Щирота
    let long = useRef() //Долгота
    let dispatch = useDispatch()
    const send = e => {
        dispatch(addCoordToDB({
            coords: {
                lat: lat.current.value,
                long: long.current.value
            }
        }))
    }
    return (
        <div>
            Координаты <br/>
            <Input inputRef={long} placeholder="Долгота" inputProps={{'aria-label': 'description'}}/>
            <Input inputRef={lat} placeholder="Широта" inputProps={{'aria-label': 'description'}}/>
            <Button onClick={send}>Добавить</Button>
        </div>
    );
};

export default Map;
