import {CHANGE_DATA, CHANGE_LOADING_STATE, GET_DATA, SAVE_DATA, UPDATE_MAIN_DATA} from "../types";
import {firebase} from "../../Firebase";
import {act} from "@testing-library/react";

const initial = {
    loadingState: false,
    data: {},

}

export const settingsReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, ...action.payload}
        case SAVE_DATA:
            return {...state, ...action.payload}
        case CHANGE_DATA:
            let userInfo = {...state.userInfo}
            userInfo[action.payload.name] = action.payload.value
            return {...state, userInfo}
        case UPDATE_MAIN_DATA:
            let {data, uid} = action.payload
            firebase.database().ref(`users/${uid}/userInfo`).update(data).then(r => console.log(r))
            return state
        case CHANGE_LOADING_STATE:
            return {...state, loadingState: !state.loadingState}


        default:
            return state

    }
}