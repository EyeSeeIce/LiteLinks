import React from 'react';
import classes from './IconWrapper.module.css'

const IconWrapper = ({children, crutch}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
};

export default IconWrapper;
