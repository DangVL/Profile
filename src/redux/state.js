import {reRenderEntireTree} from "../render";

let state = {
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
}
    
export let addPost = () => {
    let newPost = {
        id: state.profilePage.posts[state.profilePage.posts.length - 1].id + 1,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    reRenderEntireTree(state)
}

export let updateNewPostText = (content) => {
    state.profilePage.newPostText = content
    reRenderEntireTree(state)
}

export let sendNewMessage = (content) => {
    state.dialogPage.newMessageText = content
    reRenderEntireTree(state)
}

export let addMessage = () => {
    let newMessage = {
        id: state.dialogPage.messages[state.dialogPage.messages.length - 1].id + 1,
        message: state.dialogPage.newMessageText
    }
    state.dialogPage.messages.push(newMessage)
    state.dialogPage.newMessageText = ''
    reRenderEntireTree(state)
}

export default state