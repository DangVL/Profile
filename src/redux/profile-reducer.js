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
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: stateCopy.posts[stateCopy.posts.length - 1].id + 1,
                message: stateCopy.newPostText,  //this._state ???
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
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, content: text})

export default profileReducer