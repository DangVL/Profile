import React from 'react'
import s from './Users.module.css'
import * as axios from "axios";
import userPhotos from '../../assets/img/user.png'

let Users = (props) => {
    let getUser = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }
    return <div>
        <button onClick={getUser}>Get Users</button>
        {
            props.users.map(u => <div>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhotos} className={s.userPhoto}/>
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
                    <div>{u.name}</div><div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users