import React from 'react';
import classes from "../MainPage.module.css";

const Button = ({children}) => {
    return (
        <div className={classes.openFrame}>
            {children}
        </div>
    );
};

export default Button;
