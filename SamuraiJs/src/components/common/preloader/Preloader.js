import React from "react";
import preloader from "../../../assets/images/preloader.svg"

let Preloader = () =>{
    return <div style={{backgroundColor:"#292729", height:"100%",width:"100%", textAlign:"center"}}>
        <img src={preloader} alt=""/>
    </div>
}
export default Preloader