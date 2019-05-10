import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostCreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts addPostCreator={addPost} 
                    updateNewPostCreator={onPostChange}
                    newPostText={state.profilePage.newPostText} 
                    posts={state.profilePage.posts}
         />
}

export default MyPostsContainer