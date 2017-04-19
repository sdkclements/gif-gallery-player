import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'react-bootstrap'
import classnames from 'classnames'
import GifPlayer from 'react-gif-player'
import giff from '../../src/images/giphy.gif'
import './welcome.css'

export default class Welcomeview extends Component {
    render(){
        const { className, ...props } = this.props;
        return(
            <div className={ classnames('Welcomeview', className) } {...props}>
                <Jumbotron className="welcomescrn">
                    <h1>Welcome to the Gif Gallery Creator! </h1>
                    <p>Upload, Search and make lists of Gifs .</p>
                    <p><Button bsStyle="info"><Link to="/search"> Add em up</Link></Button></p>
                    <GifPlayer gif={giff} />

                </Jumbotron>

            </div>

        )
    }
}