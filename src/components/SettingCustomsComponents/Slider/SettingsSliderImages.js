import React from 'react';
import {useDispatch} from "react-redux";
import {deleteSlide} from "../../../redux/actions/actions";

const SettingsSliderImages = ({data, uid}) => {
    let dispatch = useDispatch()
    const click = e =>{
        dispatch(deleteSlide({
            uid,
            id: data.key
        }))
    }
    return (
        <div>
            <div><img width='150px' src={data.value} alt=""/></div>
            <span onClick={click}>Удалить</span>
        </div>
    );
};

export default SettingsSliderImages;
