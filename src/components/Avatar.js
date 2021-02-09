import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {changeData} from "../redux/actions/actions";
import '../themes.css'
const Avatar = ({img,theme, status, settings}) => {
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
            background: theme === 'dark' ? 'rgba(36, 36, 36, 0.88)' : 'rgba(233,233,233,0.88)',
            color: theme === 'dark' ? '#eeeeee' : '#151010',
            fontWeight: 500,
            position: 'absolute',
            bottom: '10px',
            right: 0,
            border: theme === 'dark' ? '3px solid #b8860b' : "3px solid #181818",
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
                   {settings ? <input name='status' maxLength='20' onChange={(e) => changeHandler(e)} style={style.badge} value={status} /> : status ? <p style={style.badge}>{status}</p> : null}
               </div>
            </div>
    );
};

export default Avatar;
