import React, { useState } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import { Widget } from "@uploadcare/react-widget";


import './Profile.css'

function Profile(){

   const [input, setInput] = useState({
    name:'',
    lastName:'',
    email:'',
    password:'',
   })

    const infoStorage = localStorage.getItem("user");
    const userInfo = JSON.parse(infoStorage);
    console.log(userInfo);

    return(
        <div class ="fixed-top">
        <Navbar/>
        <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={userInfo.imageUrl}/><Widget publicKey ="e7afc989eff083e04496"/><span class="font-weight-bold">{userInfo.userName}</span><span class="text-black-50">{userInfo.mail}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h2 class="text-right">Profile</h2>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">First Name</label><input type="text" class="form-control" placeholder={userInfo.givenName} value=""/></div>
                    <div class="col-md-6"><label class="labels">Last Name</label><input type="text" class="form-control" value="" placeholder={userInfo.familyName}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder={userInfo.email} value=""/></div>
                    <div class="col-md-12"><label class="labels">Password</label><input type="password" class="form-control" placeholder="********" value=""/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
    </div>
</div>
)}

export default Profile