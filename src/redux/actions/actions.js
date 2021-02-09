import {
    ACTIVE_NAV, ADD_COORD_TO_DB, ADD_IMG_TO_DB, CHANGE_AUTH_STATE, CHANGE_BLOCK,
    CHANGE_DATA, CHANGE_LOADING_STATE,
    CREATE_NOTE,
    CREATE_USER, DELETE_COORDINATE, DELETE_SLIDE,
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

export function changeData(payload) {
    return {
        type: CHANGE_DATA,
        payload
    }
}

export function updateMainData(payload) {
    return {
        type: UPDATE_MAIN_DATA,
        payload
    }
}

export function changeLoadingState(payload) {
    return {
        type: CHANGE_LOADING_STATE,
        payload
    }
}

export function changeAuthState(payload) {
    return {
        type: CHANGE_AUTH_STATE,
        payload
    }
}

export function changeBlock(payload) {
    return {
        type: CHANGE_BLOCK,
        payload
    }
}

export function addCoordToDB(payload) {
    return (dispatch, getState) => {
        let a = getState(state => state)
        let uid = a.login.uid
        let {lat, long, message, description} = payload.coords
        firebase.database().ref(`users/${uid}/block/map`).set(true)
        firebase.database().ref(`users/${uid}/customBlock/map`).push({
            lat,
            long,
            message,
            description
        })
            .then(a => {
                return {
                    type: ADD_COORD_TO_DB,
                    payload
                }
            })

    }
}
export function deleteSlide(payload){
    let {uid, id} = payload
    firebase.database().ref(`users/${uid}/customBlock/slider/${id}`).remove()
    return {
        type: DELETE_SLIDE,
        payload
    }
}
export function addImgToDb(payload){
    return(dispatch, getState) => {
        let a = getState(state => state)
        let uid = a.login.uid
        firebase.database().ref(`users/${uid}/block/slider`).set(true)
        firebase.database().ref(`users/${uid}/customBlock/slider`).push(payload)
            .then(a => {
                return{
                    type: ADD_IMG_TO_DB,
                    payload
                }
            })
    }
}

export function deleteCoordinate(payload){
    console.log(payload)
    firebase.database().ref(`users/${payload.uid}/customBlock/map/${payload.id}`).remove()
    return{
        type: DELETE_COORDINATE,
        payload
    }
}