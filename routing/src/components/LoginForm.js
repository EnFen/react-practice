import React from 'react';

export default (props) => {
    const { onSubmit, loginError } = props
    return (
        <form onSubmit={onSubmit}>
            {loginError && <p>{loginError}</p>}
            <label>Email: <input type="email" name="email" /></label><br />
            <label>Password: <input type="password" name="password" /></label><br />
            <button type="submit">Login</button>
        </form>
    )
}