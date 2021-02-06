import {CHANGE_DATA, CHANGE_LOADING_STATE, GET_DATA, SAVE_DATA, UPDATE_MAIN_DATA} from "../types";
import {firebase} from "../../Firebase";

import vk from "../../vendors/png/vk.png";
import github from "../../vendors/github.svg";
import telegram from "../../vendors/png/telegram.png";
import twitter from "../../vendors/png/twitter.png";
import skype from "../../vendors/png/skype.png";
import linkedin from "../../vendors/png/linkedin.png";
import viber from "../../vendors/png/viber.png";
import whatsapp from "../../vendors/png/whatsapp.png";
import inst from "../../vendors/png/instagram.png";
import phone from '../../vendors/png/phone.png';
import email from "../../vendors/png/email.png";
const initial = {
    loadingState: false,
    authState: false,
    data: {},
    images: {
        vk,github,telegram,twitter,skype,linkedin,viber,whatsapp,inst,phone, email
    },
    linksTemplate: {
        vk: 'https://vk.com/',
        github: 'https://github.com/',
        telegram: 'https://t.me/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://linkedin.com/in/',
        instagram: 'https://www.instagram.com/',
    },
    value: {
        userInfo:[]
    }

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