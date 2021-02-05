import {ACTIVE_NAV, CREATE_NOTE, CREATE_USER, GET_DATA, GET_UID, SAVE_DATA} from "../types";
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
        firebase.database().ref(`users/${payload}`).on('value', snp => {
            if (snp.val()) {
                return dispatch(saveData(snp.val()))
            }
        })
    }
}

export function saveData(payload) {
    return {
        type: SAVE_DATA,
        payload
    }
}