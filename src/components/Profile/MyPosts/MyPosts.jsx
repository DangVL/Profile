import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>My posts
            <div>
            <textarea></textarea>
            <button>add</button>
            </div>
            <div>
                <Post message='Hello World'/>
                <Post message='Javascript' />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts