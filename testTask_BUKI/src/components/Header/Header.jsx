import React, {memo} from 'react'
import s from './header.module.css'

const Header = ({countMessages,countUsers, lastData}) =>{
    return<header className={s.header}>
        <p className={s.logo}>My Chat <span>{countUsers} users {countMessages} messages</span></p>
        <p className={s.lastData}>Last message: {lastData}</p>
    </header>
}
export default memo(Header)