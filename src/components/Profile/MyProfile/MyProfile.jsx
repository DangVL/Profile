import React from 'react';
import s from './MyProfile.module.css'
import ProfileStatus from "./ProfileStatus";

const MyProfile = (props) => {
    if (!props.profile) {
        return <div>
            <div>
                <img className={s.img}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg"
                     alt=""/>
                <span>Alex Dang</span>
            </div>
            <ProfileStatus status={props.status}/>
            <div>Name: Alex</div>
            <div>age: 18</div>
            <div>gender: male</div>
        </div>
    } else {
        return (
            <div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} />
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        )
    }
}

export default MyProfile