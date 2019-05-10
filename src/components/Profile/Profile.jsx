import React from 'react';
import s from './Profile.module.css'
import MyProfile from './MyProfile/MyProfile.jsx'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
    return (
        <div>
            <div><img className={s.img} src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""></img></div>
            <div className={s.descriptionBlock}>
            <MyProfile />
            <MyPostsContainer store={props.store} />
            </div>
        </div>
    )
}

export default Profile