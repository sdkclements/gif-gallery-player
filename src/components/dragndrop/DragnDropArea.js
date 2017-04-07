import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import {  Grid, Row, Col } from 'react-bootstrap'
import './DragnDropArea.css'
import Gifplayer from "../player/gifPlayer";
import giphy from '../../images/giphy.gif'

export default class DragnDropArea extends Component {
    constructor(props){
        super(props)
        this.state = {
            files: []
        }

}
    onDrop(acceptedFiles) {
        this.setState({
            files: acceptedFiles,
            name: acceptedFiles[0].name
        })
        console.log(acceptedFiles)

}
    render(){

        return(
            <Grid>
                <Row className="show-grid">
                    <Col md={8}>
                        <div className="dzone">

                <h3> Drag N Drop Area </h3>
                <Dropzone onDrop={this.onDrop}>
                    <div className="dropText"> Try dropping some files here, or click to select files to upload</div>
                </Dropzone>
                </div>

                    </Col>
                    <Col md={4}>
                <div>
                    <h3> Uploaded GIF</h3>
                    <p> ------------- </p>
                    <p> Gif player below </p>
                    <p>{this.state.name}</p>
                    <Gifplayer gif={giphy} />
                </div>
                    </Col>




                </Row>
            </Grid>


        )
    }
}


