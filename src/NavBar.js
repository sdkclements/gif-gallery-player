import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavBar extends Component {

    render() {
        return (

                <div className="navbarcontainer">
                    {/* Below Is JSX Bootstrap Navbar formatted with pills */}
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/home" >Gif Gallery Player</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav bsStyle="pills" >
                            <NavItem ><Link to="/home"> Home </Link> </NavItem>
                            <NavItem ><Link to="/search"> Search </Link></NavItem>
                            <NavItem ><Link to="/list"> Gif List </Link></NavItem>
                        </Nav>
                    </Navbar>
                </div>


        );
    }
}


