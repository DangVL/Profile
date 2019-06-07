import React from 'react'
import s from './Users.module.css'

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                followed: true, fullname: 'Max', status: 'BigBoss', location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, photoUrl: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                followed: true, fullname: 'Alex', status: 'Maybe web developer', location: {city: 'Kyiv', country: 'Ukraine'}},
            {id: 3, photoUrl: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                followed: false, fullname: 'John', status: 'I\'m Boss', location: {city: 'LA', country: 'USA'}},
        ])
    }

    return <div>
        {
            props.users.map(u => <div>
                <span>
                    <div>
                        <img src={u.photoUrl} alt='sadas' className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <div>{u.fullname}</div><div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users