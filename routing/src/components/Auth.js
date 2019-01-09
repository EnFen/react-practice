import React, { Component } from 'react'
import api from '../api/init'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import App from '../App'
import Users from './Users'
import Contact from './Contact'
import Nav from './Nav'
import Notfound from './Notfound'
import BookmarkList from './BookmarkList';
import LoginForm from './LoginForm'


class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            loginError: ''
        }
    }

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


                }
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
        const isLoggedIn = this.state.user.email

        return (
            <div>
                {!isLoggedIn && <LoginForm onSubmit={this.handleSignIn} loginError={this.state.loginError} />}
                {isLoggedIn &&
                    <Router>
                        <div>
                            <Nav />
                            <Switch>
                                <Route exact path="/bookmarks" component={BookmarkList} />
                                <Route exact path="/users" component={Users} />
                                <Route path="/users/:id" component={Users} />
                                <Route exact path="/" component={App} />
                                <Route path="/contact" component={Contact} />
                                <Route component={Notfound} />
                            </Switch>
                        </div>
                    </Router>
                }


            </div>
        )
    }
}

export default Auth