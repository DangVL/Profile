import React from 'react'
import Dialogs from "./Dialogs";
import {sendMessageCreator, addMessageCreator} from "../../../redux/dialog-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

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



/*let authRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)