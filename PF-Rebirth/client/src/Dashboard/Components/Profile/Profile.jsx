import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../Components/Navbar/Navbar';
import { Widget } from "@uploadcare/react-widget";
import { updateUser } from '../../../Redux/Actions/index';
import './Profile.css';
import { useNavigate } from 'react-router-dom';


function validate(){
    let errors = {};

}

function Profile(){

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const profile = useSelector((state)=>state.profileView)
    
    //console.log(profile)

    const infoStorage = localStorage.getItem("user");
    const user = Object.keys(profile).length !== 0 ? profile : JSON.parse(infoStorage)

   
    const [input, setInput] = useState({
        formBasicName:'',
        formBasicLastName:'',
        formBasicMail: '',
        formBasicPassword:'',
        formBasicImage: '',
        formBasicUserName: ''
    })

   
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
        dispatch(updateUser(user.email ? user.email : user.mail, input))
        // localStorage.clear()
    }

    // console.log(input)

    return(
        <div className ="fixed-top">
        <Navbar/>
        <form method ="PUT" onSubmit={(e)=>handleSubmit(e)}>
        <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" alt="profileImg" width="150px" src={user.image ? user.image: user.imageUrl}/>
                <Widget publicKey ="e7afc989eff083e04496"
                value={input.formBasicImage}
                onFileSelect={(e)=>{
                    e.done((file)=>{handleImage(file)})
                }}
                />
            </div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="text-right">Profile</h2>
                </div>
                <div className="row mt-2">
                    
                    <div className="col-md-6"><label className="labels">First Name</label><input id="formBasicName" type="text" className="form-control" name ="formBasicName" placeholder={user.givenName ? user.givenName : user.name} value={input.formBasicName} onChange={(e)=> {handleChange(e)}}/></div>
                    <div className="col-md-6"><label className="labels">Last Name</label><input id="formBasicLastName" type="text" className="form-control" name="formBasicLastName" value={input.formBasicLastName} placeholder={user.familyName ? user.familyName : user.lastName} onChange={(e)=> {handleChange(e)}}/></div>

                </div>
                <div>
                <div ><label className="labels">Username</label><input id="formBasicUserName" type="text" className="form-control" name="formBasicUserName" value={input.formBasicUserName} placeholder={user.name ? user.name : user.userName} onChange={(e)=> {handleChange(e)}}/></div>

                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Email</label><input id="formBasicMail" name ="formBasicMail" type="text" className="form-control" placeholder={user.email ? user.email : user.mail} value={input.formBasicMail} onChange={(e)=>{handleChange(e)}} disabled/></div>
                    <div className="col-md-12"><label className="labels">Password</label><input id="formBasicPassword" name="formBasicPassword" type="password" className="form-control" placeholder="********" value={input.formBasicPassword} onChange={(e) => {handleChange(e)}}/></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
            </div>
        </div>
    </div>
    </form>
</div>
)}

export default Profile