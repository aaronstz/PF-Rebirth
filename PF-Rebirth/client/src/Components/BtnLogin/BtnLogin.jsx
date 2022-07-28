
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import './BtnLogin.css';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../../Redux/Actions/index.js';
import { useDispatch } from 'react-redux';
const { REACT_APP_CLIENT_ID } = process.env;

export default function BtnLogin() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSuccess = ({profileObj, tokenObj}) => {
      console.log(profileObj);
      console.log(tokenObj);
      dispatch(postUser(profileObj))
      // navigate("/dashboard")
    }

    const failureLogin = (response) => {
        console.log(response)
    }
  
    useEffect(()=>{
      function start(){
        gapi.client.init({
          clientId : REACT_APP_CLIENT_ID,
          scope : ""
        })
      }
  
      gapi.load('client:auth2', start)
    })
    
    return (
        <GoogleLogin
            clientId={REACT_APP_CLIENT_ID}
            render={renderProps => (
            <button 
              onClick={renderProps.onClick} 
              disabled={renderProps.disabled} 
              className='btn-google'>Login with Google
            </button>
            )}
            onSuccess={onSuccess}
            onFailure={failureLogin}
            cookiePolicy={'single_host_origin'}
        />
    )
}
