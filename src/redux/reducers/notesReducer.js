import {ACTIVE_NAV, CREATE_NOTE} from "../types";

const initial = {
    actionNav: '',
    notes: [ {
        text: 'qweasd'
    } ]
}

export const notesReducer = (state = initial, action) => {
    switch (action.type) {
        case ACTIVE_NAV:
            return {...state, actionNav: action.payload}
        case CREATE_NOTE:
            console.log(action.payload)
            return {...state, notes: state.notes.concat({
                    text: action.payload
                })}
        default:
            return state
    }
    return state
}
