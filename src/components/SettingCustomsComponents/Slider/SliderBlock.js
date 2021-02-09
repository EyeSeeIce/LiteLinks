import React from 'react';
import Slider from "./Slider";
import Paper from "../../MyCustomComponents/Paper";

const SliderBlock = ({theme, customBlock, data}) => {
    return (
        <Paper slider theme={theme}>
            <Slider customBlock={customBlock} />
        </Paper>
    );
};

export default SliderBlock;
