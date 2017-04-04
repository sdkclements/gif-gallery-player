import React, { Component} from 'react'
import $ from 'jquery'


const queryGiphy = (query) => {
    let term = query.replace(/\s/, "+");
    let url = "http://api.giphy.com/v1/gifs/search?q="+ term +"&api_key=dc6zaTOxFJmzC"
    return $.get(url).then((response) =>
        response["Search"]
    );
}
class GiffySearchCont extends Component {
    constructor() {
        super();
        this.state = {
            query: "", // search query starts empty
            searched: false, // a user has not submitted a search by defualt
            results: [] // initialize an empty array for results
        }
    }
    // when ever search input is entered, change the state
    handleUpdateSearch(e) {
        this.setState({
            query: e.target.value // grab whatever's in the search input
        });
    }
    // when the user clicks search
    handleSubmitSearch(e) {
        e.preventDefault(); // prevent default page refresh
        console.log(this.state.query); // log the current value of the user's search
        // make ajax call
        queryGiphy(this.state.query).then((gifs) => {
            console.log(gifs);
            // redefine our app's state to include populated response
            this.setState({
                results: gifs,
                query: "",
                searched: true // flip the switch
            })
        })
    }
    render() {
        if (this.state.searched) {
            return (
                <Results gifs={this.state.results} />
            )
        }
        return (
            <Search
                onUpdateSearch={(event) => this.handleUpdateSearch(event)}
                onSubmitSearch={(event) => this.handleSubmitSearch(event)}
                query={this.state.query}
            />
        )
    }
};

export default GiffySearchCont