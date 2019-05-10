import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
    let postsElement = props.posts.map(el => {
        return <Post message={el.message} likesCount={el.likesCount}/>
    })

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPostCreator()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostCreator(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              placeholder='Write something'
                              value={props.newPostText}/>
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