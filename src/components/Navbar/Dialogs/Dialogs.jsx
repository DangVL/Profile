import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, addMessageCreator} from "../../../redux/dialog-reducer";

const Dialogs = (props) => {
    
    let dialogItem = props.dialogPage.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesItem = props.dialogPage.messages.map(el => <Message message={el.message} id={el.id}/>)

    let addMessage = () => {
        props.dispatch(addMessageCreator())
    }

    let sendMessage = (e) => {
        let messageText = e.target.value
        //props.dispatch({ type: 'SEND-NEW-MESSAGE', content: messageText})
        props.dispatch(sendMessageCreator(messageText))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
                <div className={s.communication}>
                    <div><textarea onChange={sendMessage}
                        value={props.dialogPage.newMessageText} /></div>
                    <div><button onClick={addMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs