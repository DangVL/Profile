import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage //???
    let addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostCreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts addPostCreator={addPost} 
                    updateNewPostCreator={onPostChange}
                    //store={props.store} 
                    store={state}/>
}

export default MyPostsContainer