import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../../../Components/Navbar/Navbar'
import { Widget } from "@uploadcare/react-widget";
import { updateUser } from '../../../Redux/Actions/index'

import './Profile.css'

function validate(){
    let errors = {};

}

function Profile(){

   const [input, setInput] = useState({
    formBasicName:'',
    formBasicLastName:'',
    formBasicMail: '',
    formBasicPassword:'',
    formBasicImage: '',
    formBasicUserName: ''
   })
   

    const dispatch = useDispatch()

    const infoStorage = localStorage.getItem("user");
    const userInfo = JSON.parse(infoStorage);

    
    // function handleMail(e) {
    //     e.preventDefault();
    //     if(input.formBasicMail === ''){
    //             setInput({
    //                     ...input,
    //                     [e.target["formBasicMail"]] : userInfo.email ? userInfo.email : userInfo.userToken.mail
    //                 })
    //             }
    //     setInput({
    //         ...input,
    //         [e.target["formBasicMail"]] : e.target.value
    //     })
    // }

    function handleChange(e){
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleImage(file){
        setInput({
            ...input,
            formBasicImage: `https://ucarecdn.com/${file.uuid}/`

        })
        
    }

    // function handleLastName(e){
    //     if(input.formBasicLastName === ''){
    //         setInput({
    //             ...input,
    //             [e.target.formBasicLastName] : userInfo.familyName ? userInfo.familyName : userInfo.userToken.lastName
    //         })
    //     }
    //     setInput({
    //         ...input,
    //         [e.target.name] : e.target.value
    //     })
    // }

    // function handlePassword(e){
    //     if(input.formBasicPassword === ''){
    //         setInput({
    //             ...input,
    //             [e.target.formBasicPassword] : userInfo.password
    //         })
    //     }
    //     setInput({
    //         ...input,
    //         [e.target.name] : e.target.value
    //     })
    // }

    // function handleUser(e){
    //     if(input.formBasicUserName === ''){
    //         setInput({
    //             ...input,
    //             [e.target.formBasicUserName] : userInfo.name ? userInfo.name : userInfo.userToken.userName
    //         })
    //     }
    //     setInput({
    //         ...input,
    //         [e.target.name] : e.target.value
    //     })
    // }

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target)
        dispatch(updateUser(userInfo.email ? userInfo.email : userInfo.userToken.mail, input))
        // localStorage.clear()
    }

    console.log(input)

    return(
        <div class ="fixed-top">
        <Navbar/>
        <form method ="PUT" onSubmit={(e)=>handleSubmit(e)}>
        <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="rounded-circle mt-5" width="150px" src={userInfo.imageUrl? userInfo.imageUrl : userInfo.userToken.imageUrl}/>
                <Widget publicKey ="e7afc989eff083e04496"
                value={input.formBasicImage}
                onFileSelect={(e)=>{
                    e.done((file)=>{handleImage(file)})
                }}
                />
            </div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h2 class="text-right">Profile</h2>
                </div>
                <div class="row mt-2">
                    
                    <div class="col-md-6"><label class="labels">First Name</label><input id="formBasicName" type="text" class="form-control" name ="formBasicName" placeholder={userInfo.givenName ? userInfo.givenName : userInfo.userToken.name} value={input.formBasicName} onChange={(e)=> {handleChange(e)}}/></div>
                    <div class="col-md-6"><label class="labels">Last Name</label><input id="formBasicLastName" type="text" class="form-control" name="formBasicLastName" value={input.formBasicLastName} placeholder={userInfo.familyName ? userInfo.familyName : userInfo.userToken.lastName} onChange={(e)=> {handleChange(e)}}/></div>

                </div>
                <div>
                <div ><label class="labels">Username</label><input id="formBasicUserName" type="text" class="form-control" name="formBasicUserName" value={input.formBasicUserName} placeholder={userInfo.name ? userInfo.name : userInfo.userToken.userName} onChange={(e)=> {handleChange(e)}}/></div>

                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Email</label><input id="formBasicMail" name ="formBasicMail" type="text" class="form-control" placeholder={userInfo.email ? userInfo.email : userInfo.userToken.mail} value={input.formBasicMail} onChange={(e)=>{handleChange(e)}}/></div>
                    <div class="col-md-12"><label class="labels">Password</label><input id="formBasicPassword" name="formBasicPassword" type="password" class="form-control" placeholder="********" value={input.formBasicPassword} onChange={(e) => {handleChange(e)}}/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit">Save Profile</button></div>
            </div>
        </div>
    </div>
    </form>
</div>
)}

export default Profile