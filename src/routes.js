import React from 'react'
import { Router, Route} from 'react-router'
import App from './App'
import LoginArea from './components/login/LoginArea.js'
import DragnDropArea from './components/dragndrop/DragnDropArea.js'
import gifPlayer from './components/player/gifPlayer.js'
import Welcomeview from "./scenes/welcome";

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />

        <Route  exact path="/home" component={Welcomeview } />
        <Route  exact path="/addFiles" component={DragnDropArea } />
        <Route  path="/login" component={LoginArea } />
        <Route  path="/gifPlayer" component={gifPlayer} />

    </Router>
);

export default Routes;