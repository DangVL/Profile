let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello World', likesCount: 10 },
                { id: 2, message: 'Javascript', likesCount: 15 },
                { id: 3, message: 'Wow', likesCount: 0 }
            ],
            newPostText: 'Write something'
        },
        dialogPage: {
            dialogs: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'John' },
                { id: 3, name: 'Ashley' },
                { id: 4, name: 'Amanda' },
                { id: 5, name: 'Christian' }
            ],
            messages: [
                { id: 1, message: 'Hey' },
                { id: 2, message: 'What\'s up' },
                { id: 3, message: 'Javascript rules' },
                { id: 4, message: 'Because javascript' },
                { id: 5, message: 'Kabzda' }
            ],
            newMessageText: 'That\'s work'
        }
    },

    getState() {
        return this._state
    },

    rerenderEntireTree() {
        console.log('State change')
},

    addPost() {
        let newPost = {
            id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.rerenderEntireTree(this._state) //???
    },

    updateNewPostText(content) {
        this._state.profilePage.newPostText = content
        this.rerenderEntireTree(this._state)
},

    sendNewMessage(content) {
        this._state.dialogPage.newMessageText = content
        this.rerenderEntireTree(this._state)
    },

    addMessage() {
        let newMessage = {
            id: this._state.dialogPage.messages[this._state.dialogPage.messages.length - 1].id + 1,
            message: this._state.dialogPage.newMessageText
        }
        this._state.dialogPage.messages.push(newMessage)
        this._state.dialogPage.newMessageText = ''
        this.rerenderEntireTree(this._state)
    },

    subscribe(observe) {
        this.rerenderEntireTree = observe
    }
}


export default store