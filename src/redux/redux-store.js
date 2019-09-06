import sidebarReducer from "./sidebar-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducers from "./users-reducer"
import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,                //dispatch
    sidebar: sidebarReducer,
    usersPage: usersReducers,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.state = store
export default store