import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogItem = props.dialogPage.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesItem = props.dialogPage.messages.map(el => <Message message={el.message} id={el.id}/>)

    let addMessage = () => {
        //props.dispatch(addMessageCreator())
        props.addMessageCreator()
    }

    let sendMessage = (e) => {
        let messageText = e.target.value
        //props.dispatch(sendMessageCreator(messageText))
        props.sendMessageCreator(messageText)
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