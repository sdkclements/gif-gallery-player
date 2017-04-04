import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import './DragnDropArea.css'

class DragnDropArea extends Component {

    onDrop(acceptedFiles, rejectedFiles) {
        console.log('Accepted Files: ', acceptedFiles)
        console.log('Rejected Files: ', rejectedFiles)

}

    render(){
        return(
            <div className="dzone">
                <h1> Drag N Drop Area </h1>
                <Dropzone onDrop={this.onDrop}>
                    <div className="dropText"> Try droping some files here, or click to select files to upload</div>
                </Dropzone>
            </div>

        )
    }
}

export default DragnDropArea