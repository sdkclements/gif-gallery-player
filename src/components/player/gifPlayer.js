import React, { Component } from 'react';
import './gifPlayer.css';
import test from '../../images/lockitup.gif'
import GifPlayer from 'react-gif-player'





class gifPlayer extends Component {


    render() {

        return (
            <div id="gifP">

                <GifPlayer gif={test} />

            </div>
        );
    }
}

export default gifPlayer;
