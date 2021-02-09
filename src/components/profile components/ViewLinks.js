import React from 'react';
import Paper from "../MyCustomComponents/Paper";
import LinkComponent from "./LinkComponent";

const ViewLinks = ({data, theme}) => {
    let a = data.socialLinks
    const links = []
    for (let key in a){
        links.push({
            key,
            value: a[key]
        })
    }
    if (links.length & 1){
        links.push('its not a bug its a feature')
    }
    return (
        <Paper theme={theme} box>
            {links.map(link => <LinkComponent key={link.key} data={link}/>)}
        </Paper>
    );
};

export default ViewLinks;
