import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import MyProfile from './MyProfile/MyProfile.jsx'

const Profile = () => {
    return (
        <div>
            <div><img className={s.img} src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""></img></div>
            <MyProfile />
            <MyPosts />
        </div>
    )
}

export default Profile