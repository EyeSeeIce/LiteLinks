import React from 'react';
import classes from './JustWrapper.module.css'

const JustWrapper = ({children}) => {
    const style = {
        width: '90%',
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        position: 'relative',
    }
    return (
        <div style={style} className={classes.wrapper}>
            {children}
        </div>
    );
};

export default JustWrapper;
