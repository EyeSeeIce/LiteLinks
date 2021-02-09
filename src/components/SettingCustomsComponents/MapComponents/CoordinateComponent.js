import React from 'react';
import classes from './CoordinateComponent.module.css'

const CoordinateComponent = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
};

export default CoordinateComponent;
