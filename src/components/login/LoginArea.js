import React, {Component} from 'react'
import { auth, googleAuthProvider } from '../../firebase.js';
import './LoginArea.css'

class LoginArea extends Component{

    render(){
        return(
        <div className="SignIn btn-padded">

            //button to allow for user sign in with popup window using the googleAuthProvider

            <button
                className="btn btn-lg btn-block"
                onClick={() =>
                    auth.signInWithPopup(googleAuthProvider)} >
                Sign In
            </button>
        </div>

        )
    }
}

export default LoginArea;





