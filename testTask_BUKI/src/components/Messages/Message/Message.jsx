import React, {memo, useState} from 'react'
import s from './message.module.css'
import heart from '../../../assets/heart.svg'
import heartFill from '../../../assets/heartFill.svg'
const Message = ({ava, date, name, messageText}) =>{
    const [like, setLike] = useState(false)
    let clickLike = () => {
        like ? setLike(false) : setLike(true)
    }
    return <div className={`${s.message} ${name==='Taylor'?s.owner:''}`}>
        <img className={s.ava} src={ava} alt=""/>
        <div className={s.textBlock}>
            <p className={s.name}>{name}</p>
            <p className={s.messageText}>{messageText}</p>
        </div>
        <p className={s.date}>{date}</p>
        <button className={s.like} onClick={clickLike}><img src={like?heartFill:heart} alt="&heart;"/></button>

    </div>
}
export default memo(Message)