import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,                //dispatch
    sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store