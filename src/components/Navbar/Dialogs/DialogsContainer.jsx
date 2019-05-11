import React from 'react'
import Dialogs from "./Dialogs";
import {sendMessageCreator, addMessageCreator} from "../../../redux/dialog-reducer";
import StoreContext from '../../../StoreContext';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
        { (store) => {
        let state = store.getState()

        let addMessage = () => {
            store.dispatch(addMessageCreator())
        }

        let sendMessage = (e) => {
            //let messageText = e.target.value
            //props.dispatch({ type: 'SEND-NEW-MESSAGE', content: messageText})
            store.dispatch(sendMessageCreator(e))
        }
        return <Dialogs addMessageCreator={addMessage}
                        sendMessageCreator={sendMessage}
                        newMessageText={state.dialogPage.newMessageText}
                        dialogPage={state.dialogPage} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer