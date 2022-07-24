import React from "react";
import { useState } from "react";


function Support_form(){
let {supportForm,useSupportform}=useState({mail:"",title:"",description:""})

function handleSubmit(event){
    event.preventDefault()
    
}

function handleChange(event){
alert(event.target.value)
}

return(
    <React.Fragment>
<form onSubmit={e=>handleSubmit(e)}>
<label htmlFor="email">Email</label>
<input type={"text"} name={"email"} onChange={e=>handleChange(e)} placeholder={"Ingrese su mail"}></input>
<label htmlFor="title">Email</label>
<input type={"text"} name={"title"} onChange={e=>handleChange(e)} placeholder={"Ingrese su mail"}></input>
<label htmlFor="description">Email</label>
<textarea name={"description"} onChange={e=>handleChange(e)} placeholder={"Ingrese su mail"}></textarea>
<input type={"submit"} value={"Submit"}></input>
</form>
    </React.Fragment>
)

}

export default Support_form