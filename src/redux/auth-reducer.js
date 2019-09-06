import {authAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA'

let initalState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initalState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case SET_USER_DATA:
            return {
                stateCopy,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

export default authReducer
