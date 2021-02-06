import React from 'react';
import classes from './Papre.module.css'

const Paper = ({children, header, box}) => {
    const style = {
        header: {
            padding: '10px',
        },
        box: {
            display: 'flex',
            columnGap: '10px',
            rowGap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '10px',
            boxShadow: '2px 3px 8px -2px #000000',
        }
    }
    return (
        <div style={box ? style.box : null} className={classes.paperWrapper}>
            {children}
        </div>
    );
};

export default Paper;
