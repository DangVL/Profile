const ADD_MESSAGE = 'ADD-MESSAGE'
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Ashley'},
        {id: 4, name: 'Amanda'},
        {id: 5, name: 'Christian'}
    ],
    messages: [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'What\'s up'},
        {id: 3, message: 'Javascript rules'},
        {id: 4, message: 'Because javascript'},
        {id: 5, message: 'Kabzda'}
    ],
    newMessageText: 'That\'s work'
}

const dialogReducer = (state = initialState, action) => {
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