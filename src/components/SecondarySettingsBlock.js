import React from 'react';
import FormWrapper from "./FormWrapper";
import JustWrapper from "./JustWrapper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const SecondarySettingsBlock = () => {
    return (
        <JustWrapper>
            <FormWrapper>
                <FormControl variant="outlined" >
                    <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                    <Select
                        native
                        label="Links"
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
            </FormWrapper>
        </JustWrapper>
    );
};

export default SecondarySettingsBlock;
