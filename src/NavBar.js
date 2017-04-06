import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import LoginArea from './components/login/LoginArea.js'
import DragnDropArea from './components/dragndrop/DragnDropArea.js'
import gifPlayer from './components/player/gifPlayer.js'
import Welcomeview from "./scenes/welcome";


export default class NavBar extends Component {

    render() {
        return (
            <Router>
                <div className="navbarcontainer">
                    {/* Below Is JSX Bootstrap Navbar formatted with pills */}
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/" >Gif Gallery Player</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav bsStyle="pills"  >
                            <NavItem ><Link to="/"> Home </Link> </NavItem>
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
                        <Route  path="/" component={Welcomeview } />
                        <Route  exact path="/addFiles" component={DragnDropArea } />
                        <Route  path="/login" component={LoginArea } />
                        <Route  path="/gifPlayer" component={gifPlayer} />

                    </div>

                </div>
            </Router>

        );
    }
}


