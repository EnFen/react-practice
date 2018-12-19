import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {
  state = {
    filter: '',
    songs: ['Bohemian Rhapsody', 'The Chain', 'Comfortably Numb']
  }

  updateFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const filteredSongs = this.state.songs.filter(song => song.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div className="App">
        <h1>Songify</h1>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="search">Search for song: </label>
          <input id="search" onChange={this.updateFilter} />
        </form>
        <ul>
          {filteredSongs.map(song => <li>{song}</li>)}
        </ul>
      </div>
    )
  }
}

export default App