const GET_MESSAGES = 'GET_MESSAGES'
const USERS_IS_GETTING = 'USERS_IS_GETTING'
const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
    messages: [],
    isLoading: false,
    usersCount: 0,
    messagesCount: 0,
    lastData: 0
}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state, messages: action.messages,
                messagesCount: action.messages.length,
                usersCount: action.countUsers,
                lastData: action.lastData
            }

        case USERS_IS_GETTING:
            return {...state, isLoading: action.fetching}
        case ADD_MESSAGE:
            let newMessage = action.newMessage
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}
export default messagesReducer
const getMessagesAction = (messages, countUsers, lastData) => ({type: GET_MESSAGES, messages, countUsers, lastData})
const isFetching = (fetching) => ({type: USERS_IS_GETTING, fetching})
const addMessageAction = (newMessage) => ({type: ADD_MESSAGE, newMessage})

export const getMessages = () => async (dispatch) => {
    dispatch(isFetching(true))
    const response = await fetch('https://run.mocky.io/v3/b13799bf-0bf4-4a74-bf46-b7a2fb35a8c8')
    const messages = await response.json()
    const countUsers = [...new Set(messages.map(el => el.user))].length
    const lastData = messages.sort((a, b) => a.created_at - b.created_at)[messages.length - 1].created_at
    dispatch(getMessagesAction(messages, countUsers, lastData))
    dispatch(isFetching(false))
}
export const addMessage = (newMessage) => (dispatch) => {
    dispatch(addMessageAction(newMessage))
}