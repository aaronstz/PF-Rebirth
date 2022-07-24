import React from "react";
import { useState } from "react";


function Support_form(){
let [supportForm,setSupportForm]=useState({email:"",title:"",description:""})
let [sFormError,setSFormError]=useState({emailError:"",titleError:"",descriptionError:""})
let regexEmail=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

function handleSubmit(event){
    event.preventDefault()
   if (supportForm.email==="") setSFormError({...sFormError,emailError:""})
    
}

function handleChange(event){
    let field=event.target.name;
    let value=event.target.value;
    switch (field){
case "email":
    if (!regexEmail.test(value)){
     setSFormError({...sFormError,emailError:"El mail no es valido"})
    }else{
        setSFormError({...sFormError,emailError:""})
    }
    setSupportForm({...supportForm,email:value })
break
case "title":
    setSupportForm({...supportForm,title:value })
break
case "description":
    setSupportForm({...supportForm,description:value })
break
default:
    break
    }
}

return(
    <React.Fragment>
<form onSubmit={e=>handleSubmit(e)}>
<label htmlFor="email">Email</label>
<input type={"text"} name={"email"} onChange={e=>handleChange(e)} value={supportForm.email} placeholder={"Ingrese su mail"}></input>
<label >{sFormError.emailError}</label>
<label htmlFor="title">Email</label>
<input type={"text"} name={"title"} onChange={e=>handleChange(e)} value={supportForm.title} placeholder={"Ingrese su mail"}></input>
<label htmlFor="description">Email</label>
<textarea name={"description"} onChange={e=>handleChange(e)} value={supportForm.description} placeholder={"Ingrese su mail"}></textarea>
<input type={"submit"} value={"Submit"}></input>
</form>
    </React.Fragment>
)

}

export default Support_form