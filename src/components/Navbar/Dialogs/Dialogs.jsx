import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator} from "../../../redux/state";
import {addMessageActionCreator} from "../../../redux/state";

const Dialogs = (props) => {
    
    let dialogItem = props.dialogPage.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesItem = props.dialogPage.messages.map(el => <Message message={el.message} id={el.id}/>)

    let messageContent = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let sendMessage = () => {
        let messageText = messageContent.current.value
        //props.dispatch({ type: 'SEND-NEW-MESSAGE', content: messageText})
        props.dispatch(sendMessageActionCreator(messageText))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
                <div className={s.communication}>
                    <div><textarea onChange={sendMessage} ref={messageContent}
                    value={props.dialogPage.newMessageText} /></div>
                    <div><button onClick={addMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs