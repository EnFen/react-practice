import React, { Component } from 'react';
import './App.css';

function FormattedTime(props) {
  return props.time.toLocaleTimeString()
}

function EventButton(props) {
  return (
    <button onClick={props.action}>{props.buttonText}</button>
  )
}

function LoginMessage(props) {
  return (
    <div>
      <p>Hello, {props.user}</p>
      <EventButton
        action={props.action}
        buttonText={props.buttonText}
      />
      <p>You have logged in {props.count} times.</p>
      <p>Login history: </p>
      <ul>
        {props.timestamp.map(time => <li> <FormattedTime time={time} /> </li>)}
      </ul>
    </div>
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: 'guest',
      loginCount: 0,
      log: []
    }
  }

  getLoginCount = () => {
    return this.state.loginCount
  }

  login = () => {
    if (this.state.user === 'guest') {
      this.setState({
        user: 'admin',
        loginCount: this.state.loginCount + 1,
        log: [...this.state.log, new Date()]
      })
    } else {
      this.setState({
        user: 'guest'
      })
    }
  }

  // Why does the login method work without parentheses, but the getLoginCount only work with them???
  render() {
    let logStatus = this.state.user === 'admin' ? 'Log out' : 'Log in'
    return (
      <div className="App">
        <LoginMessage
          user={this.state.user}
          action={this.login}
          buttonText={logStatus}
          count={this.getLoginCount()}
          timestamp={this.state.log}
        />
      </div >
    );
  }
}

export default App;
