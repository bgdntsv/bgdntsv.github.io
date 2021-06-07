import React, {memo} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../validator";
import {Textarea} from "../../common/FormControl/FormsControl";

const MyPosts = memo(
    (props) => {
        let postElements = props.posts.map(s => <Post messages={s.text} key={s.id} like={s.likes} img={s.img}/>);
        let AddPost = (values) => {
            props.addPost(values.postText)
        }
        return (
            <div className={s.posts}>
                <div>
                    <AddPostFormRedux onSubmit={AddPost}/>
                </div>
                <div>
                    {postElements}
                </div>
            </div>
        );
    }
)
let maxLength10 = maxLengthCreator(10)
const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name="postText"
               component={Textarea}
               placeholder="Text of new post"
               validate={[required, maxLength10]}/>
        <button>Add post</button>
    </form>
}
const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)
export default MyPosts;