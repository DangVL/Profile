const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initalState = {
        posts: [
            {id: 1, message: 'Hello World', likesCount: 10},
            {id: 2, message: 'Javascript', likesCount: 15},
            {id: 3, message: 'Wow', likesCount: 0}
        ],
        newPostText: ''
}

const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: state.newPostText,  //this._state ???
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.content
            return state;
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, content: text})

export default profileReducer