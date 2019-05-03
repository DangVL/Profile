import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    let path = `/dialogs/ ${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = props => {
    return (
        <div className='s.dialog'>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Ashley'},
        {id: 4, name: 'Amanda'},
        {id: 5, name: 'Christian'}
    ]

    let messageData = [
        { id: 1, message: 'Hey' },
        { id: 2, message: "What's up" },
        { id: 3, message: 'Javascript rules' },
        { id: 4, message: 'Because javascript' },
        { id: 5, message: 'Kabzda' }
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                    <DialogItem name='Alex' id='1'/>
                    <DialogItem name='John' id='2'/>
                    <DialogItem name='Ashley' id='3'/>
                    <DialogItem name='Amanda' id='4'/>
                    <DialogItem name='Christian' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hey' />
                <Message message="What's up" />
                <Message message='Javascript rules' />
                <Message message='Because javascript' />
                <Message message='Kabzda' />
            </div>
        </div>
    )
}

export default Dialogs