import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}><p>Profile</p></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/dialog" activeClassName={s.active}><p>Messages</p></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}><p>Users</p></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}><p>News</p></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}><p>Music</p></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}><p>Settings</p></NavLink>
            </div>
        </nav>
    )
}

export default NavBar;