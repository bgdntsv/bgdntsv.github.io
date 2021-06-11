import React, {memo, useEffect, useRef, useState} from 'react'
import Message from './Message/Message'
import s from './messages.module.css'
import InputText from '../Input/InputText'

const Messages = ({messages, addMessage}) => {
    const refList = useRef(null)
    let messagesList = messages.map((el) => {
        return (
            <Message key={el.id}
                     ava={el.avatar}
                     name={el.user}
                     date={el.created_at}
                     messageText={el.message}/>)
    })

    let onScrollMessages = () => {
        let item = refList.current
        item.scrollTop = item.scrollHeight
    }
    const [lastId, setLastId] = useState(null)
    useEffect(() => {
        if(messages.length>0){
            setLastId(parseInt(messages[messages.length - 1].id)+1)
        }
        onScrollMessages()
    }, [messages])

    return <div className={s.messages}>
        <div ref={refList} className={s.messagesList}>
            <div className={s.messagesListItems}>{messagesList}</div>
        </div>
        <InputText addMessage={addMessage} lastId={lastId}/>
    </div>
}
export default memo(Messages)