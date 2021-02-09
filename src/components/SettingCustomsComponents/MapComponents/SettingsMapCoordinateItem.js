import React from 'react';
import CoordinateComponent from "./CoordinateComponent";
import {useDispatch, useSelector} from "react-redux";
import {deleteCoordinate} from "../../../redux/actions/actions";

const SettingsMapCoordinateItem = ({item}) => {
    let dispatch = useDispatch()
    let uid = useSelector(state => state.login.uid)

    const click = e =>{
        deleteCoordinate({
            uid,
            id: item.id,
        })
    }
    return (
        <CoordinateComponent>
            <div>
                <div>Широта: {item.value.lat}</div>
                <div>Долгота: {item.value.long}</div>
                <div>Текст: {item.value.message}</div>
                <div>Описание: {item.value.description}</div>
            </div>
            <div>
                <div onClick={click}>Удалить</div>
            </div>
        </CoordinateComponent>
    );
};

export default SettingsMapCoordinateItem;
