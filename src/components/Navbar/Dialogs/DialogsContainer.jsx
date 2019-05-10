import React from 'react'
import {sendMessageCreator, addMessageCreator} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    let sendMessage = (e) => {
        //let messageText = e.target.value
        //props.dispatch({ type: 'SEND-NEW-MESSAGE', content: messageText})
        props.store.dispatch(sendMessageCreator(e))
    }
    return <Dialogs addMessageCreator={addMessage}
                    sendMessageCreator={sendMessage}
                    newMessageText={state.dialogPage.newMessageText}
                    dialogPage={state.dialogPage} />
}

export default DialogsContainer