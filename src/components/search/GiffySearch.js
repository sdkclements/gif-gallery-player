// Bring in React and ReactDom
import React, { PropTypes } from 'react'
import $ from 'jquery'
import { Jumbotron, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button, HelpBlock, Grid, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import GifPlayer from 'react-gif-player'
import styles from '../../styles/index.js'


const queryGiphy = (query) => {
    let term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
    let urla = "http://api.giphy.com/v1/gifs/search?q=" + term;
    let apikey = "&api_key=dc6zaTOxFJmzC&limit=3"
    let url = urla.concat(apikey)
    console.log(url)

    // fetch all movies matching the passed in title as JSON
    return $.getJSON(url).then((response) =>
        response["data"]
    );

}

class SearchContainer extends React.Component{
    // define our Search component's state when its rendered
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

class Search extends React.Component{
    render() {
        return (
            <Jumbotron>
                <div className="col-sm-12">
                    <form onSubmit={this.props.onSubmitSearch}>
                        <FormGroup>
                            <ControlLabel> Search those Gifs baby </ControlLabel>
                            <FormControl
                                type="text"
                                value={this.props.query}
                                placeholder="Enter a gif name"
                                onChange={this.props.onUpdateSearch}
                               />
                            <FormControl.Feedback />
                            <HelpBlock> Results may vary on input</HelpBlock>

                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button bsStyle="primary" type="submit"> Search</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </form>
                </div>
            </Jumbotron>
        )
    }
};

Search.propTypes = {
    onUpdateSearch: PropTypes.func.isRequired,
    onSubmitSearch: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired
}

class Results extends React.Component{
    render() {
        return (
            <div style={styles.gifs}>
                {this.props.gifs.map((gif, index) => (
                        <div style={styles.gif} key={index+1}>
                            <GifPlayer gif={gif.images.fixed_height.url}/>
                            <p>{gif.slug}</p>
                        </div>
                    )
                )}
            </div>
        )
    }
};

class Home extends React.Component{
    render() {
        return (
            <Jumbotron>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12} >
                            <h1><Link to="/search"> Giphy Search</Link></h1>
                            <Col sm={12} style={styles.space}>
                                <SearchContainer />
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
        )
    }
};

// Render Home
export default Home