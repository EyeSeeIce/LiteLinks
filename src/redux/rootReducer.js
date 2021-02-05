import {combineReducers} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {notesReducer} from "./reducers/notesReducer";
import {settingsReducer} from "./reducers/settingsReducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    notes: notesReducer,
    data: settingsReducer
})

