import React from 'react';
import classes from './IconWrapper.module.css'

const IconWrapper = ({children, crutch}) => {
    return (
        <div style={crutch ? {background: 'transparent', cursor: 'default', width:'0.1px', padding: '0'} : null } className={classes.wrapper}>
            {children}
        </div>
    );
};

export default IconWrapper;
