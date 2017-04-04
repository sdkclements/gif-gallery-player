import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import LoginArea from './components/login/LoginArea.js'
import DragnDropArea from './components/dragndrop/DragnDropArea.js'
import gifPlayer from './components/player/gifPlayer.js'



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
              <NavItem ><Link to="/home"> Home </Link> </NavItem>
              <NavItem ><Link to="/gallery"> Gallery </Link></NavItem>
              <NavItem ><Link to="/addfiles"> Add Files </Link></NavItem>
              <NavItem ><Link to="/gifplayer"> Player </Link></NavItem>
              <NavItem ><Link to="/gifsearch"> Search </Link></NavItem>


          </Nav>
          <Nav pullRight>
              <NavItem ><Link to="/login"> Login </Link></NavItem>
              {/* add :userid below */}
              <NavItem ><Link to="/user"> User </Link></NavItem>

          </Nav>
          </Navbar>
          <div>
          <Route  path="/addFiles" component={DragnDropArea } />
          <Route  path="/login" component={LoginArea } />
          <Route path="/gifPlayer" component={gifPlayer} />

          </div>

      </div>
</Router>

    );
  }
}

export default App;
