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
                <NavLink to='/home/news'>News</NavLink>
                <NavLink to='/home/messages'>Messages</NavLink>
                <Switch>
                    <Route component={News} path='/home/news'/>
                    <Route component={Messages} path='/home/messages'/>
                    <Redirect to='/home/news'/>
                </Switch>
            </div>
        )
    }
}

class News extends React.Component {
    render() {
        return (
            <div>
                News
            </div>
        )
    }
}

class Messages extends React.Component {

    state = {
        messages: [
            {id: 1, title: 'message01'},
            {id: 2, title: 'message02'}
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.messages.map(message =>
                        (<li key={message.id}>
                            <NavLink to={`/home/messages/detail/${message.id}`}>{message.title}</NavLink>
                            <button
                                onClick={() => this.props.history.push(`/home/messages/detail/${message.id}`)}>push
                            </button>
                            <button
                                onClick={() => this.props.history.replace(`/home/messages/detail/${message.id}`)}>replace
                            </button>
                        </li>))}
                </ul>
                <Route component={Detail} path='/home/messages/detail/:id'/>
            </div>
        )
    }
}

class Detail extends React.Component {
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}
