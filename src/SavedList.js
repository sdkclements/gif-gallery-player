import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap'

import * as firebase from 'firebase'


export default class GifList extends Component{
    constructor(){
        super();
        this.state = {
            newGif:'',
            gifList:[]
        }
            this.gifListRef = firebase.database().ref("/giflist")

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.gifListRef.on('value', (snapshot) => {
            console.log(snapshot.val())
            this.setState({
                gifList: Object.values(snapshot.val().gif)
            }, _ => console.log(this.state.gifList))


            }
        )

    }
    handleChange( e ) {
        e.preventDefault();
        const newGif = e.target.value;
        this.setState({ newGif });
    } //END OF HANDLE CHANGE

    handleSubmit( e ) {
        e.preventDefault();
        //which node to add or remove from
        this.gifListRef.child('/gif').push(this.state.newGif)
        this.setState({ newGif: '' });
    } //END OF HANDLE SUBMIT
    render(){

        return(
        <div className="container-fluid border box">
            <div className='padded'>
                <h3>Add to your Gif List
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Enter Gif to add"
                        type='text'
                        value={this.state.newGif}
                        onChange={this.handleChange} />
                    <input type='submit' className='btn btn-default submit-button button' />
                </form>


                <div>
                    {this.state.gifList.map((gif, index)=>(
                    <div key={index}>
                        <p> {gif} </p>
                    </div>
                    )
                )}
                   </div>

            </div>
        </div>

        )
    }

}