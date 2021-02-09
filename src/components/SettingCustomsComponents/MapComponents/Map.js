import React, {useRef} from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {addCoordToDB} from "../../../redux/actions/actions";
import {loginReducer} from "../../../redux/reducers/loginReducer";
import SettingsMapCoordinateItem from "./SettingsMapCoordinateItem";
import JustWrapper from "../../MyCustomComponents/JustWrapper";

const Map = () => {
    let lat = useRef() //Щирота
    let long = useRef() //Долгота
    let message = useRef() //Текст на метке
    let description = useRef() //Текст на метке
    let dispatch = useDispatch()
    let coords = useSelector(state => state.data.customBlock.map)
    let ar = []
    for (let key in coords){
        ar.push({
            id: key,
            value: coords[key]

        })
    }
    const send = e => {
        dispatch(addCoordToDB({
            coords: {
                lat: lat.current.value,
                long: long.current.value,
                message: message.current.value,
                description: description.current.value
            }
        }))


    }
    return (
        <div>
            Координаты <br/>
            <Input inputRef={long} placeholder="Долгота" inputProps={{'aria-label': 'description'}}/>
            <Input inputRef={lat} placeholder="Широта" inputProps={{'aria-label': 'description'}}/>
            <div><Input fullWidth inputRef={message} placeholder="Сообщение на метке" inputProps={{'aria-label': 'description'}}/></div>
            <div><Input fullWidth inputRef={description} placeholder="Описание(не будет отображаться на карте)" inputProps={{'aria-label': 'description'}}/></div>
            <Button onClick={send}>Добавить</Button>
            <JustWrapper>
                {ar.map(item => <SettingsMapCoordinateItem key={item.id} item={item} />)}
            </JustWrapper>
        </div>
    );
};

export default Map;
