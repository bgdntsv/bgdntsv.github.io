import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {HashRouter, Route} from 'react-router-dom'
import DialogContainer from "./components/Dialogs/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from 'react-redux'
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import store from './redux/reduxStore'


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialog" render={() =>
                        <DialogContainer/>
                    }/>
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileContainer/>
                    }/>
                    <Route path="/users" render={() =>
                        <UsersContainer/>
                    }/>
                    <Route path="/news" render={() =>
                        <News/>
                    }/>
                    <Route path="/music" render={() =>
                        <Music/>
                    }/>
                    <Route path="/settings" render={() =>
                        <Settings/>
                    }/>
                    <Route path={"/login"} render={() =>
                        <LoginPage/>}/>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) =>({
    initialized: state.app.initialized
})
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
const SamuraiJsApp = () =>{
    return<>
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    </>
}
export default SamuraiJsApp
