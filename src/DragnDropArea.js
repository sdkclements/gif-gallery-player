import React, {Component} from 'react'
import Dropzone from 'react-dropzone'

class DragnDropArea extends Component {

    onDrop(acceptedFiles, rejectedFiles) {
        console.log('Accepted Files: ', acceptedFiles)
        console.log('Rejected Files: ', rejectedFiles)

}

    render(){
        return(
            <div>
                <Dropzone onDrop={this.onDrop}>
                    <div> Try droping some files here, or click to select files to upload</div>
                </Dropzone>
            </div>

        )
    }
}

export default DragnDropArea