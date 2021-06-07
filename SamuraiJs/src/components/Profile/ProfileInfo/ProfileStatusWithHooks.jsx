import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => setStatus(props.status) ,[props.status])
    const modeActivate = () => setEditMode(true)
    const deactivateEdit = () => {
            setEditMode(false)
            props.updateStatus(status)
            setStatus(props.status)
    }
    const onStatusChange = (e) => setStatus(e.currentTarget.value)

    return <>
        {editMode && <div>
            <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEdit} type="text" value={status}/>
        </div>}
        {!editMode &&
        <div>
            <span onDoubleClick={modeActivate} > {props.status || "No status"}</span>
        </div>
        }
    </>


}

export default ProfileStatusWithHooks