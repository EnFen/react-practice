import React, { Component } from 'react';
import axios from 'axios'
// import logo from './logo.svg';
import './App.css';
import API from './Api'

// const studentsApi = 'http://localhost:3001/api/students'

class App extends Component {
  state = {
    newStudent: '',
    students: []
  }

  changeNewStudent = (event) => {
    this.setState({ newStudent: event.target.value })
  }

  createNewStudent = (event) => {
    event.preventDefault()
    // Post the new student to our server
    API.post('/students', { student: this.state.newStudent })
      .then((response) => {
        // Success! Add the new student to our array and clear the input
        const students = [...this.state.students, response.data]
        this.setState({ students, newStudent: '' })
      })
  }

  componentDidMount() {
    API.get('/students')
      .then((response) => {
        this.setState({ students: response.data })
      })
  }

  render() {
    return (

      <div className="App">
        <form onSubmit={this.createNewStudent}>
          <label>New Student:</label><input value={this.state.newStudent} onChange={this.changeNewStudent} />
        </form>
        {this.state.students.map((student) => <p>{student}</p>)}
      </div>
    )
  }
}

export default App;
