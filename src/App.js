import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
          <nav>
              Gif Background Playlist Creator{'\u00A0'}
              <Link to="/"> Home </Link> {'\u00A0'} | {'\u00A0'}
              <Link to="/login"> Login </Link> {'\u00A0'} | {'\u00A0'}
              <Link to="/player"> Player </Link>
          </nav>
          <Route path="/login" component={LoginArea} />

      </div>
        </Router>
    );
  }
}

export default App;
