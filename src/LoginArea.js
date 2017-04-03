import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import './LoginArea.css'

class LoginArea extends Component{
   constructor(props){
       super(props)
       this.state = {
           pwValue: '',
           emailValue: ''
       }

    }
    handlePWChange(e) {
        this.setState({pwValue: e.target.value })
    }
    handleEmailChange(e) {
       this.setState({emailValue: e.target.value})
    }
    render(){
        return(
            <div className="LoginContainer">
            <form>
                <FormGroup controlId="formBasicText">
                    <ControlLabel> Form Example</ControlLabel>
                    <FormControl type="text" value={this.state.value} placeholder="Enter Password" onChange={this.handlePWChange} />
                    <FormControl type="text" value={this.state.value} placeholder="Enter Email" onChange={this.handleEmailChange} />
                    <FormControl.Feedback />
                </FormGroup>

            </form>
            </div>
        )
    }
}

export default LoginArea;