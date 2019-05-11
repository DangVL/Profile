import React from 'react';
import MyProfile from './MyProfile/MyProfile.jsx'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div><img className={s.img} src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""></img></div>
            <div className={s.descriptionBlock}>
            <MyProfile />
            <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile