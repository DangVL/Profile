import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = props => {
    //let state = props.store.getState()
    let postsElement = props.posts.map(el => {
        return <Post message={el.message} likesCount={el.likesCount}/>
    })

    let newPostElement = React.createRef()

    let OnAddPost = () => {
        props.addPost()
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
                    <button onClick={OnAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts