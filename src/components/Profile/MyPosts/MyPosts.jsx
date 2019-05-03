import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hello World', likesCount: 10},        
        {id: 2, message: 'Javascript', likesCount: 15},        
        {id: 3, message: '', likesCount: 0},        
    ]

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div className={s.button}><button>Add Post</button></div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                <Post message={postData[2].message} likesCount={postData[2].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts