import {CHANGE_BLOCK, CHANGE_DATA, CHANGE_LOADING_STATE, GET_DATA, SAVE_DATA, UPDATE_MAIN_DATA} from "../types";
import {firebase} from "../../Firebase";

import vk from "../../vendors/icons/VK.svg";
import github from "../../vendors/icons/github_101792.svg";
import telegram from "../../vendors/icons/Telegram.svg";
import twitter from "../../vendors/icons/Twitter.svg";
import skype from "../../vendors/png/skype.png";
import linkedin from "../../vendors/icons/Linkedin.svg";
import viber from "../../vendors/png/viber.png";
import whatsapp from "../../vendors/png/whatsapp.png";
import instagram from "../../vendors/icons/Instagram.svg";
import phone from '../../vendors/icons/phone.svg';
import email from "../../vendors/icons/E-mail.svg";
const initial = {
    loadingState: false,
    authState: false,
    data: {},
    block: {},
    images: {
        vk,github,telegram,twitter,skype,linkedin,viber,whatsapp,instagram,phone, email
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
        case CHANGE_BLOCK:
            let block = {...state.block}
            block[action.payload.name] = action.payload.value
            return {...state, block}


        default:
            return state

    }
}