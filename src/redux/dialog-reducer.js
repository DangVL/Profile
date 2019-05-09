const ADD_MESSAGE = 'ADD-MESSAGE'
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'

const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages[state.messages.length - 1].id + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case SEND_NEW_MESSAGE:
            state.newMessageText = action.content
            return state
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const sendMessageCreator = (text) => 
    ({type: SEND_NEW_MESSAGE, content: text})

export default dialogReducer