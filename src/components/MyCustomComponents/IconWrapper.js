import React from 'react';
import classes from './IconWrapper.module.css'

const IconWrapper = ({children, crutch}) => {
    console.log()
    /*style={}*/
    return (
        <div style={crutch ? {background: 'transparent', cursor: 'default'} : null } className={classes.wrapper}>
            {children}
        </div>
    );
};

export default IconWrapper;
