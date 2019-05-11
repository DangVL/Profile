import React from 'react';
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().profilePage //???
            let addPost = () => {
                store.dispatch(addPostCreator())
            }

            let onPostChange = (text) => {
                let action = updateNewPostCreator(text)
                store.dispatch(action)
            }

            return <MyPosts addPostCreator={addPost} 
                            updateNewPostCreator={onPostChange}
                            //store={props.store} 
                            store={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer