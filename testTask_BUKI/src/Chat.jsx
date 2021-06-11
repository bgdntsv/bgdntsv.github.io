import './App.css'
import {Component} from 'react'
import Header from './components/Header/Header'
import Messages from './components/Messages/Messages'
import {connect} from 'react-redux'
import {addMessage, getMessages} from './reducers/messagesReducer'
import s from './chat.module.css'

class Chat extends Component {
    componentDidMount() {
        this.props.getMessages()
    }

    render() {
        return (
            <div className={s.chat}>
                <Header lastData={this.props.lastMessage} countMessages={this.props.messagesCount} countUsers={this.props.usersCount}/>
                {/*<img src={loader} alt=""/> :*/}
                <Messages addMessage={this.props.addMessage} isFetching={this.props.isGettingMessages} messages={this.props.messages}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    messages: state.messages.messages,
    isGettingMessages: state.messages.isLoading,
    messagesCount: state.messages.messagesCount,
    usersCount: state.messages.usersCount,
    lastMessage:state.messages.lastData,
})
export default connect(mapStateToProps, {getMessages, addMessage})(Chat)
