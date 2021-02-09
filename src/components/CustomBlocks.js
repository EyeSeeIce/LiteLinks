import React, {useState} from 'react';
import JustWrapper from "./MyCustomComponents/JustWrapper";
import FormWrapper from "./MyCustomComponents/FormWrapper";
import classes from "./SecondarySettingsBlock.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Map from "./SettingCustomsComponents/MapComponents/Map";
import Slider from "./SettingCustomsComponents/Slider/Slider";
import SliderSettings from "./SettingCustomsComponents/Slider/SliderSettings";

const CustomBlocks = () => {
    const [select, setSelect] = useState('')
    const ar = [
        {
            key: 'map'
        },
        {
            key: 'slider'
        },
    ]
    const getBlock = e =>{
        switch (select){
            case "map":
                return <Map />
            case "slider":
                return <SliderSettings />
            default:
                return;
        }
    }

    return (
        <JustWrapper>
            <FormWrapper>
                <FormControl variant="outlined" >
                    <InputLabel  htmlFor="outlined-age-native-simple">Links</InputLabel>
                    <Select onChange={e => setSelect(e.target.value)} native label="Links">
                        <option hidden selected disabled aria-label="None"/>
                        {ar.map((item, index) => <option key={index} defaultValue={item.key}>{item.key}</option>)}
                    </Select>
                </FormControl>
            </FormWrapper>
            {getBlock()}
        </JustWrapper>
    );
};

export default CustomBlocks;
