import React from 'react';
import s from './Post.module.css'

const Post = (props) => { 
    return (
                <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ94_cWEa4ISg_GnyXpnYj-JZp2qY9kd4I7bVMWuVNUqz6BEj1Eg" alt=""/>
                {props.message}
                <div><span>like</span></div>
                </div>
    )
}

export default Post