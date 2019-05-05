import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogItem = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesItem = props.state.messages.map(el => <Message message={el.message} id={el.id}/>)

    let messageContent = React.createRef()
    let sendMessage = () => {
        let messageText = messageContent.current.value
        alert(messageText)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
                <div className={s.communication}>
                    <div><textarea ref={messageContent}></textarea></div>
                    <div><button onClick={sendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs