import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/preloader/Preloader";

const Profile = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return<div className={classes.content}>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}
                         status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
}

export default Profile;