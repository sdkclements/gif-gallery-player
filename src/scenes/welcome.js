import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'react-bootstrap'
import classnames from 'classnames'

export default class Welcomeview extends Component {
    render(){
        const { className, ...props } = this.props;
        return(
            <div className={ classnames('Welcomeview', className) } {...props}>
                <Jumbotron>
                    <h1>Welcome to the Gif Gallery Creator! </h1>
                    <p>Upload, Search and make lists of Gifs .</p>
                    <p><Button bsStyle="info"><Link to="/search"> Add em up</Link></Button></p>
                </Jumbotron>

            </div>

        )
    }
}