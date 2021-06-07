import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return <div className={classes.item}>
        <div className={classes.body}>
            <img
                src={props.img}
                alt="avatar"/>
            <p>{props.messages}</p>
        </div>
        <div className={classes.like}>
            <p>Likes:{props.like}</p>
        </div>
    </div>

}
export default Post;