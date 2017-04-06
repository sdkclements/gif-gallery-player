import React, { Component } from 'react'
import {

    Link
} from 'react-router-dom'
import {

    Jumbotron,
    Button
} from 'react-bootstrap'


export default class Welcomeview extends Component {
    render(){
        return(

            <div>
                <Jumbotron>
                    <h1>Welcome to the Gif Combinator! </h1>
                    <p>Upload, search and combine gifs.</p>
                    <p><Button bsStyle="primary"><Link to="/addfiles"> Add em up</Link></Button></p>
                </Jumbotron>

            </div>

        )
    }
}