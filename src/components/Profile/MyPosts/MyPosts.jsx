import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>My posts
            <div>
            <textarea></textarea>
            <div className={s.button}><button>add</button></div>
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