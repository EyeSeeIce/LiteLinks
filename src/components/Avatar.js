import React from 'react';
import {useDispatch} from "react-redux";
import {changeData} from "../redux/actions/actions";

const Avatar = ({img, status, settings}) => {
    console.log(status)
    const dispatch = useDispatch()
    const changeHandler = e => {
        dispatch(changeData({name: e.target.name, value: e.target.value}))
    }
    const style = {
        wrapper:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        },
        img:{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
        badge:{
            background: '#ffffff95',
            position: 'absolute',
            bottom: '10px',
            right: 0,
            border: '1px solid black',
            padding: '5px',
            borderRadius: '4px',
        },
        box:{
            position: 'relative'
        }
    }
    return (
            <div style={style.wrapper}>
               <div style={style.box}>
                   <img style={style.img} src={img && img} alt=""/>
                   {settings ? <input name='status' maxLength='20' onChange={(e) => changeHandler(e)} style={style.badge} value={status} /> : <span style={style.badge}>{status}</span>}
               </div>
            </div>
    );
};

export default Avatar;
