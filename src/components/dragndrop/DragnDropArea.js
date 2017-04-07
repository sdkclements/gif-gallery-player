import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import './DragnDropArea.css'
import Gifplayer from "../player/gifPlayer";

class DragnDropArea extends Component {
    constructor(props){
        super(props)
        this.state = {
            files: []
        }

}
    onDrop(acceptedFiles) {
        this.setState({
            files: acceptedFiles
        })
        console.log('Accepted Files: ' + acceptedFiles)

}
    render(){

        return(
            <div className="dzone">
                <div>
                <h1> Drag N Drop Area </h1>
                <Dropzone onDrop={this.onDrop}>
                    <div className="dropText"> Try dropping some files here, or click to select files to upload</div>
                </Dropzone>
                </div>
                <div>
                    <h1> Uploaded GIF</h1>
                    <Gifplayer gfiles={this.state.files} />
                </div>



            </div>

        )
    }
}

export default DragnDropArea