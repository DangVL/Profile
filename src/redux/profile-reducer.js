import {profileAPI, userAPI} from "../API/API";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initalState = {
    posts: [
        {id: 1, message: 'Hello World', likesCount: 10},
        {id: 2, message: 'Javascript', likesCount: 15},
        {id: 3, message: 'Wow', likesCount: 0}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initalState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: stateCopy.posts[stateCopy.posts.length - 1].id + 1,
                message: state.newPostText,
                likesCount: 0
            }
            stateCopy.posts = [...state.posts, newPost]
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.newPostText = action.content
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostCreator = () => ({type: ADD_POST})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const updateNewPostCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, content: text})

export const  getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export default profileReducer
