import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

export default (props) => {
    const { isLoggedIn, onSubmit, loginError } = props
    return (
        <div>
            <Link to="/">Home</Link>
            {'  |  '}
            <Link to="/bookmarks">Bookmarks</Link>
            {isLoggedIn && '  |  '}
            {isLoggedIn && < Link to="/users">Users</Link>}
            {isLoggedIn && '  |  '}
            {isLoggedIn && <Link to="/contact">Contact</Link>}
            {!isLoggedIn && <LoginForm onSubmit={onSubmit} loginError={loginError} />}
        </div>
    )
};