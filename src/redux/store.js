import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello World', likesCount: 10},
                {id: 2, message: 'Javascript', likesCount: 15},
                {id: 3, message: 'Wow', likesCount: 0}
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'John'},
                {id: 3, name: 'Ashley'},
                {id: 4, name: 'Amanda'},
                {id: 5, name: 'Christian'}
            ],
            messages: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'What\'s up'},
                {id: 3, message: 'Javascript rules'},
                {id: 4, message: 'Because javascript'},
                {id: 5, message: 'Kabzda'}
            ],
            newMessageText: 'That\'s work'
        },
        sidebar: {}
    },

    getState() {
        return this._state
    },

    _rerenderEntireTree() {
        console.log('State change')
    },

    subscribe(observe) {
        this._rerenderEntireTree = observe
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._rerenderEntireTree(this._state)
    }
}

export default store