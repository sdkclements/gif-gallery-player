import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import LoginArea from './LoginArea.js'
import DragnDropArea from './DragnDropArea.js'
import gifPlayer from './gifPlayer.js'
import GiffySearchCont from './GiffySearch.js'





class App extends Component {


  render() {
    return (
<Router>
      <div className="App">
          {/* Below Is JSX Bootstrap Navbar formatted with pills */}
          <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                      <Link to="/home" >Gif Gallery Player</Link>
                  </Navbar.Brand>
              </Navbar.Header>
          <Nav bsStyle="pills"  >
              <NavItem eventKey={1}><Link to="/home"> Home </Link></NavItem>
              <NavItem eventKey={2}><Link to="/gallery"> Gallery</Link></NavItem>
              <NavItem eventKey={3}><Link to="/addFiles"> addFiles </Link></NavItem>
              <NavItem eventKey={4}><Link to="/gifPlayer"> Gif Player </Link></NavItem>
              <NavItem eventKey={5}><Link to="/gifsearch"> Gif Search </Link></NavItem>


          </Nav>
          <Nav pullRight>
              <NavItem><Link to="/login"> Login </Link></NavItem>
              {/* add :userid below */}
              <NavItem><Link to="/user"> User </Link></NavItem>

          </Nav>
          </Navbar>
          <div>
          <Route exact path="/addFiles" component={DragnDropArea} />
          <Route exact path="/login" component={LoginArea} />
          <Route exact path="/gifPlayer" component={gifPlayer} />
          <Route exact path="/gifsearch" component={GiffySearchCont} />
          </div>



      </div>
</Router>

    );
  }
}

export default App;
