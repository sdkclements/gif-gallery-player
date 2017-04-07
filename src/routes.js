import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import LoginArea from './components/login/LoginArea.js'
import DragnDropArea from './components/dragndrop/DragnDropArea.js'
import Gifplayer from './components/player/gifPlayer.js'
import Welcomeview from "./scenes/welcome";
import Home from './components/search/GiffySearch'

const Routes = (props) => (
            <Router {...props}>
                <div>
                <Route path="/" component={App}/>
                <Route exact path="/home" component={Welcomeview }/>
                <Route exact path="/addFiles" component={DragnDropArea }/>
                <Route path="/login" component={LoginArea }/>
                <Route path="/gifPlayer" component={Gifplayer} />
                 <Route path="/search" component={Home} />
                </div>


            </Router>
        )
export default Routes



