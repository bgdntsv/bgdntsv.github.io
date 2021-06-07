import React from "react";
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../validator";
import {Textarea} from "../common/FormControl/FormsControl";

const Dialog = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} img={dialog.img}/>);
    let dialogMessages = props.dialogsPage.messages.map(message =>
        <Message message={message.message} key={message.id}/>)
    let AddMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }
    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {dialogMessages}
                <AddMessageFormRedux onSubmit={AddMessage}/>
            </div>
        </div>
    );
}
let maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Enter message" component={Textarea} validate={[required, maxLength50]} name="newMessageBody"/>
            <button>Post</button>
        </form>
    </>
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialog
