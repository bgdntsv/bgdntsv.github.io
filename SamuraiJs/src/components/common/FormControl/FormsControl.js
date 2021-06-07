import React from "react";
import style from "./FormsControl.module.css"


export let FormComponent = ({input, meta, child, ...props})=>{
    let hasError = meta.error && meta.touched;
    return <div className={style.formControl + " " + (hasError ? style.error:"")}>
        <div>
            {props.children}
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}
export const Textarea = (props) =>{
    const {input, meta, child, ...restprops} = props
    return<FormComponent {...props}><textarea {...input} {...restprops}/></FormComponent>
}
export const Input = (props) =>{
    const {input, meta, child, ...restprops} = props
    return<FormComponent {...props}><input {...input} {...restprops}/></FormComponent>
}