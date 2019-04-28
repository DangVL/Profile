import React from 'react';
import s from './MyProfile.module.css'

const MyProfile = () => {
    return (
        <div>
            <div>
                <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg" alt="" />
                <span>Alex Dang</span>
            </div>
            <div>Name: Alex</div>
            <div>age: 18</div> 
            <div>gender: male</div> 
        </div>
    )
}

export default MyProfile