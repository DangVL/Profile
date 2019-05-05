import {reRenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello World', likesCount: 10 },
            { id: 2, message: 'Javascript', likesCount: 15 },
            { id: 3, message: 'Wow', likesCount: 0 }
        ]
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
        ]
    }
}

export let addPost = (content) => {
    let newPost = {
        id: 5,
        message: content,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    reRenderEntireTree(state)
}

export default state