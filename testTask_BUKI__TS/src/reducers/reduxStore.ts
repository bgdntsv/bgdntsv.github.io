import {applyMiddleware, combineReducers, createStore} from "redux";
import thankMiddleWare from "redux-thunk"
let reducers = combineReducers({
})

let store = createStore(reducers, applyMiddleware(thankMiddleWare))
export default store