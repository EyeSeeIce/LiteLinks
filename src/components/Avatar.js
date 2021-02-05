import React from 'react';

const Avatar = ({img, status}) => {
    const style = {
        wrapper:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            border: '1px solid black'
        },
        img:{
            width: '200px',
            height: '200px',
            borderRadius: '50%'
        },
        badge:{
            position: 'absolute',
            bottom: 0,
            right: 0,
        }
    }
    return (
            <div style={style.wrapper}>
                <img style={style.img} src={img && img} alt=""/>
                <span style={style.badge}>{status}</span>
            </div>
    );
};

export default Avatar;
