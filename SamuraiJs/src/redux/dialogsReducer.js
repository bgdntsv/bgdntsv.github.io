const SEND_MESSAGE = 'SEND-MESSAGE';
let initialStore = {
    dialogs: [
        {name: 'Igor', id: '1', img: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg'},
        {
            name: 'Alexandr',
            id: '2',
            img: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'
        },
        {name: 'Sasha', id: '3', img: 'https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-s-1.jpg'},
        {name: 'Pasha', id: '4', img: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
        {name: 'Yana', id: '5', img: 'https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg'}
    ],
    messages: [
        {message: 'Hello', id: '1'},
        {message: 'How are you?', id: '2'},
        {message: 'You are shit!', id: '3'}
    ],
}
const dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: 5, message: action.newMessage}
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage})

export default dialogsReducer;
