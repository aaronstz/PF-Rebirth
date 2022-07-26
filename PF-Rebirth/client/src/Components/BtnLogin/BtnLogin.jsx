import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import './BtnLogin.css';
import { useNavigate } from 'react-router-dom';

export default function BtnLogin() {

    const clientId = "944240356620-nimmpjlb0om115mdrka0o1a1tsn8j6c9.apps.googleusercontent.com";
    const navigate = useNavigate();

    const onSuccess = (response) => {
      console.log(response);
      navigate("/dashboard")
    }

    const failureLogin = (response) => {
        console.log(response)
    }
  
    useEffect(()=>{
      function start(){
        gapi.client.init({
          clientId : clientId,
          scope : ""
        })
      }
  
      gapi.load('client:auth2', start)
    })
    
    return (
        <GoogleLogin
            clientId={clientId}
            render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='btn-google'>Login with Google</button>
            )}
            onSuccess={onSuccess}
            onFailure={failureLogin}
            cookiePolicy={'single_host_origin'}
        />
    )
}
