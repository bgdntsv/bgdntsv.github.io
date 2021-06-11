import React, {memo, useState} from 'react'
import s from './input.module.css'

const InputText = ({lastId, addMessage}) => {
    const [inputValue, setInput] = useState('')
    let sendMessage = () => {
        let nowDate = Date.now()
        nowDate = new Date(nowDate)
        let dateString = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()} ${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`
        let newMessage = {
            avatar: 'https://i.pravatar.cc/300?img=12',
            created_at: dateString,
            id: lastId,
            message: inputValue,
            user: 'Taylor'
        }
        addMessage(newMessage)
        setInput('')
    }
    return <div className={s.inputBlock}>
        <input value={inputValue} onChange={e => setInput(e.target.value)} placeholder="Type something..." type="text"/>
        <button disabled={inputValue === ''} onClick={sendMessage}>SEND</button>
    </div>
}
export default memo(InputText)