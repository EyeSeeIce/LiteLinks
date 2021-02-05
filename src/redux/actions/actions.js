import {
    ACTIVE_NAV,
    CHANGE_DATA, CHANGE_LOADING_STATE,
    CREATE_NOTE,
    CREATE_USER,
    GET_DATA,
    GET_UID,
    SAVE_DATA,
    UPDATE_MAIN_DATA
} from "../types";
import {firebase} from "../../Firebase";


export function getUid(payload) {
    return {
        type: GET_UID,
        payload
    }
}

export function activeNav(payload) {
    return {
        type: ACTIVE_NAV,
        payload
    }
}

export function createNote(payload) {
    console.log(payload)
    return {
        type: CREATE_NOTE,
        payload
    }
}

export function createUser(payload) {
    return {
        type: CREATE_USER,
        payload
    }
}

export function getData(payload) {
        return (dispatch, getState) => {
            let a = getState(state => state)
            dispatch(changeLoadingState())
            firebase.database().ref(`users/${payload}`).on('value', snp => {
               setTimeout(() => {
                   return dispatch({
                       type: SAVE_DATA,
                       payload: snp.val()
                   })
               }, 0)
            })

        }
}

export function saveData(payload) {
    return dispatch => {
        dispatch(changeLoadingState())
        return {
            type: SAVE_DATA,
            payload
        }
    }
}
export function changeData(payload){
    return{
        type: CHANGE_DATA,
        payload
    }
}

export function updateMainData(payload){
    return{
        type: UPDATE_MAIN_DATA,
        payload
    }
}
export function changeLoadingState(payload){
    return{
        type: CHANGE_LOADING_STATE,
        payload
    }
}