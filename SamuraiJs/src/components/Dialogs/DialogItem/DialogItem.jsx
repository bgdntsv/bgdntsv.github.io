import React from "react";
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <NavLink className={s.dialogItem} to={path} activeClassName={s.active}>
            <img src={props.img} alt="AVA"/>
            <p>{props.name}</p>
        </NavLink>
    );
}

export default DialogItem
