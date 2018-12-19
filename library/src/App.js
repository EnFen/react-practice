import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    filter: '',
    songs: ['Jesus Walks', 'Gold Digger', 'Touch The Sky']
  }
  updateFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    // Filter songs
    const songs = this.state.songs.filter(song => song.includes(this.state.filter))

    return (
      <div className="App">
        <h1>Songify</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search for song: </label>
          <input id="search" onChange={this.updateFilter} />
        </form>
        { songs.map(song => <p>{song}</p> )}
      </div>
    );
  }
}

export default App;
