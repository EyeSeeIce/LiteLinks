import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {changeData} from "../redux/actions/actions";

const Avatar = ({img, status, settings}) => {
    const [mouseEnter, setMouseEnter] = useState(false)
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
            boxShadow: mouseEnter ? '0px 0px 10px 2px #5b75ff' : 'none'
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
    const hover = e =>{

    }
    return (
            <div style={style.wrapper}>
               <div style={style.box}>
                   <img onMouseEnter={e => setMouseEnter(true)} onMouseLeave={e => setMouseEnter(false)} style={style.img} src={img && img} alt=""/>
                   {settings ? <input name='status' maxLength='20' onChange={(e) => changeHandler(e)} style={style.badge} value={status} /> : <span style={style.badge}>{status}</span>}
               </div>
            </div>
    );
};

export default Avatar;
