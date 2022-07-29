import React, { useState } from 'react'


function Profile({name, lastname, email, password, user, image}){

    const [input, setInput] = useState({
        name: '',
        image: '',
        user:'',
        password: '',
    })

    const infoStorage = localStorage.getItem("user");
    const userInfo = JSON.parse(infoStorage);
    
    return(
        <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={image}/><span class="font-weight-bold">{user}</span><span class="text-black-50">{email}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">{name}</label><input type="text" class="form-control" placeholder="first name" value={userInfo.givenName}/></div>
                    <div class="col-md-6"><label class="labels">{lastname}</label><input type="text" class="form-control" value="" placeholder="lastname"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">{email}</label><input type="text" class="form-control" placeholder="email" value=""/></div>
                    <div class="col-md-12"><label class="labels">{password}</label><input type="text" class="form-control" placeholder="password" value=""/></div>
                </div>
                
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        
    </div>
</div>

    
    )}

export default Profile