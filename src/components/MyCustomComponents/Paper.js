import React from 'react';
import classes from './Papre.module.css'
import '../../themes.css'

const Paper = ({children,theme,map,slider, header, box, message}) => {
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
        },
        message: {
            padding: '15px',
            fontSize: '14px',
        },
        map:{

        },
        slider:{

        }
    }
    const themes = {
        dark: {
            background: '#343434',
            margin: '10px'
        },
        light: {
            background: 'blue',
        }
    }
    const getStyle = e => {
        if (box) {
            return style.box
        } else if (message) {
            return style.message
        } else if(map){
            return style.map
        } else if(slider){
            return style.slider
        }
    }
    const cl = e =>{

        return {
            
        }
    }
    return (
        <div style={getStyle()} className={`__ACCEPTED_THEME__${theme}`}>
            {children}
        </div>
    );
};

export default Paper;
