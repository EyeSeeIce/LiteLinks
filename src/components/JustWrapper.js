import React from 'react';

const JustWrapper = ({children}) => {
    const style = {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
    }
    return (
        <div style={style}>
            {children}
        </div>
    );
};

export default JustWrapper;
