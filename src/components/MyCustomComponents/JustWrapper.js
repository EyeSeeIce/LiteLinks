import React from 'react';

const JustWrapper = ({children}) => {
    const style = {
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        position: 'relative',
    }
    return (
        <div style={style}>
            {children}
        </div>
    );
};

export default JustWrapper;
