import {useState} from "react";

const useField = arg => {
    let a;
    switch (arg) {
        case false:
            return <span></span>
        case 'undefined':
            return <></>
        default:
            return a = arg
    }
    return a
}

export default useField