import React, { Component } from 'react';
import './gifPlayer.css';
import GifPlayer from 'react-gif-player'



class Gifplayer extends Component {
    constructor(props){
        super(props)
        this.state = { gfiles: this.props.files}

}

    render() {

        return (
            <div>
                <GifPlayer gif={this.state.gfiles} />
            </div>


        );
    }
}

export default Gifplayer;
