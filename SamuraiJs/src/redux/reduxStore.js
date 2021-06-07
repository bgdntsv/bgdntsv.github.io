import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import settingsReducer from "./settingsReducer";
import newsReducer from "./newsReducer";
import musicReducer from "./musicReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thankMiddleWare from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    musicPage: musicReducer,
    newsPage: newsReducer,
    settingsPage: settingsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
let store = createStore(reducers, applyMiddleware(thankMiddleWare));

window.store = store

export default store;