import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Link to="/">Home</Link>
            {'  |  '}
            <Link to="/users">Users</Link>
            {'  |  '}
            <Link to="/contact">Contact</Link>
            {'  |  '}
            <Link to="/bookmarks">Bookmarks</Link>
        </div>
    )
};