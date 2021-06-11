import messagesReducer from './messagesReducer'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thankMiddleWare from 'redux-thunk'

const reducers = combineReducers({
    messages: messagesReducer
})

let store = createStore(reducers, applyMiddleware(thankMiddleWare))
export default store