import React from 'react'
import Dialogs from "./Dialogs";
import {sendMessageCreator, addMessageCreator} from "../../../redux/dialog-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessageCreator: () => {
            dispatch(addMessageCreator())
        },
        sendMessageCreator: (e) => {
            dispatch(sendMessageCreator(e))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer