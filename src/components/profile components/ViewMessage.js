import React from 'react';
import Paper from "../MyCustomComponents/Paper";

const ViewMessage = ({data, theme}) => {
    let {message} = data.userInfo
    return (
        <Paper theme={theme} message>
            {message}
        </Paper>
    );
};

export default ViewMessage;
