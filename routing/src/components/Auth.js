import React, { Component } from 'react'
import api from '../api/init'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import App from '../App'
import Users from './Users'
import Contact from './Contact'
import Nav from './Nav'
import Notfound from './Notfound'
import BookmarkList from './BookmarkList';

class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            isLoggedIn: false,
            loginError: ''
        }
    }
    // Try using async await
    handleSignIn = (event) => {
        event.preventDefault()
        api.post('/auth/login', {
            email: event.target.email.value,
            password: event.target.password.value
        }).then(res => {
            console.log(res.data)
            this.setState({
                user: {
                    id: res.data._id,
                    email: res.data.email,
                    role: res.data.role

                },
                isLoggedIn: true
            })
        }).catch(error => {
            console.error('Problem authenticating user: ', error)
            this.loginError()
        })
    }

    loginError = () => {
        this.setState({
            loginError: 'Problem authenticating user'
        })
    }

    render() {
        const { isLoggedIn } = this.state

        return (
            <div>
                <Router>
                    <div>
                        <Nav isLoggedIn={isLoggedIn} onSubmit={this.handleSignIn} loginError={this.state.loginError} />
                        <Switch>
                            <Route exact path="/bookmarks" render={(props) => { return <BookmarkList {...props} isLoggedIn={isLoggedIn} user={this.user} /> }} />
                            <Route exact path="/" component={App} />
                            {isLoggedIn && <Route exact path="/users" component={Users} />}
                            {isLoggedIn && <Route path="/users/:id" component={Users} />}
                            {isLoggedIn && <Route path="/contact" component={Contact} />}
                            <Route component={Notfound} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Auth