import {ADD_COORD_TO_DB, ADD_IMG_TO_DB} from "../types";


const initial = {
    coords: {

    },
    image: []
}

export const customBlockReducer = (state = initial, action) => {
    switch (action.type){
        case ADD_COORD_TO_DB:
            return {...state, ...action.payload}
        case ADD_IMG_TO_DB:
                return {...state, image: [...state.image, action.payload]}
        default:
            return state
    }

}
