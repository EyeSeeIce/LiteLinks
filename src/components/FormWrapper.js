import React from 'react';
import classes from "./steeps.module.css";

const FormWrapper = ({submit, children}) => {

    return (
        <form className={classes.form} action="" onSubmit={e => submit(e)} >
            {children}
        </form>
    );
};

export default FormWrapper;
