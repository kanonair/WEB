import React from 'react'
import {Route, Switch, Redirect, NavLink} from 'react-router-dom'

export default class Spa extends React.Component {
    render() {
        return (
            <div>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/home'>Home</NavLink>
                <Switch>
                    <Route component={About} path='/about'/>
                    <Route component={Home} path='/home'/>
                    <Redirect to='/about'/>
                </Switch>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                About
            </div>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}
