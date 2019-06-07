import sidebarReducer from "./sidebar-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducers from "./users-reducer"
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,                //dispatch
    sidebar: sidebarReducer,
    usersPage: usersReducers
})

let store = createStore(reducers)

export default store