import React from 'react';
import IconWrapper from "../MyCustomComponents/IconWrapper";
import {useSelector} from "react-redux";
import classes from './ViewContact.module.css'

const LinkComponent = ({data}) => {
    console.log(data)
    let state = useSelector(state => state.data.images)
    let img = state[data.key]
    const getType = e =>{
        switch (data.key){
            case 'phone':
                return `tel:${data.value.a}`
            case 'email':
                return `mailto:${data.value.a}`
            case undefined:
                break
            default:
                return data.value
        }
    }
    const style = {
        ok: {

        },
        phone:{
            padding: '7px'
        }
    }
    return (
        <IconWrapper crutch={data === 'its not a bug its a feature'}>
            <a target='_blank' href={getType()}><img style={data.key === 'phone' ? style.phone : style.ok} className={classes.img} src={img} alt=""/></a>
        </IconWrapper>
    );
};

export default LinkComponent;
