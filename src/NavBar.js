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


                    </div>

                </div>


        );
    }
}


