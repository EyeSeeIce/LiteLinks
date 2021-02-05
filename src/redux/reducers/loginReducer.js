import {CREATE_USER, GET_UID} from "../types";

const initial = {
    uid: null,
    name: null,
    secondName: null,
    middleName: null,
    date: null,
    work: null,
    position: null,
    email: null,
    password: null
}

export const loginReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_UID:
            return {...state, uid: action.payload}
        case CREATE_USER:
        return {...state, [action.payload.key]: action.payload.value}

        default:
            return state
    }
    return state
}



