import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>My posts
            <div>New post</div>
            <div>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts