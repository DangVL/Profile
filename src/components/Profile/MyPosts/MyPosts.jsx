import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
    let postsElement = props.posts.map(el => {
        return <Post message = {el.message} likesCount = {el.likesCount} />
    })

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div className={s.button}>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts