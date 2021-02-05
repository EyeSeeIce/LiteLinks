import {GET_DATA, SAVE_DATA} from "../types";
import {firebase} from "../../Firebase";

const initial = {
    state: false,
    data: {}
}

export const settingsReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, state: 'loading'}
        case SAVE_DATA:

            return {...state, data: action.payload}
        default:
            return state

    }
}