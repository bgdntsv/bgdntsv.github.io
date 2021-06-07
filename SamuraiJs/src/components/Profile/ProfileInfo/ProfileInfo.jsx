import React,{useState} from 'react'
import s from './ProfileInfo.module.css'
import userAva from '../../../assets/images/avatar.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import {ProfileDataForm} from './ProfileDataForm'

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)
    const selectProfilePhoto = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }
    return (
        <>
            <div className={s.profileInfo}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userAva} alt="ava "/>
                    {props.isOwner && <input type={'file'} onChange={selectProfilePhoto}/>}
                </div>
                <div className={s.description}>
                    <h2>{props.profile.fullName}</h2>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
            {editMode ? <ProfileDataForm profile={props.profile}/> : <ProfileData activateEditing={()=>setEditMode(true)} isOwner={props.isOwner} profile={props.profile}/>}
        </>
    )
}
const ProfileData = ({profile, isOwner, activateEditing}) => {
    return <div className={s.data}>
        {isOwner && <button onClick={activateEditing}>Edit my information</button>}
        <ul>
            <li><b>About me:</b> {profile.aboutMe ? profile.aboutMe : `I'm so lazy for writing it`}</li>
            <li><b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}</li>
            {profile.lookingForAJob && <li><b>Resume:</b> {profile.lookingForAJobDescription}</li>}
            <li><b>Contacts:</b>
                <ul>
                    {Object.keys(profile.contacts).map(key =>
                        <li key={key}><b>{key}:</b> {profile.contacts[key]?profile.contacts[key]:"I'm not using it"}</li>)}
                </ul>
            </li>
        </ul>
    </div>
}
export default ProfileInfo