import React, { PropTypes, Component } from 'react';
import './App.css';
import NavBar from './NavBar.js'

import classnames from 'classnames'

import Welcomeview from "./scenes/welcome";




class App extends Component {

  render() {
      const {className, ...props } = this.props
    return (
        <div className={classnames('App', className)} {...props}>
            <NavBar />

        </div>


    );
  }
}

export default App;
