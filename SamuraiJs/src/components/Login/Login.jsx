import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../validator";
import {Input} from "../common/FormControl/FormsControl";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router";
import style from "./../common/FormControl/FormsControl.module.css"

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}
const LoginForm = ({handleSubmit, error}) => {
    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name="email" placeholder="Email"/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name="password" placeholder="Password" type="password"/>
            </div>
            <div>
                <Field component="input" name="rememberMe" type="checkbox"/><span>Remember me</span>
            </div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    </>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(LoginPage)