import React, {
  Component
} from 'react';
import './App.css';
import axios from 'axios';

const serverApi = 'http://localhost:3001';

class App extends Component {
  state = {
    newBookmark: '',
    bookmarks: []
  }

  componentDidMount() {
    axios.get(serverApi + '/bookmarks')
      .then((response) => {
        this.setState({ bookmarks: response.data })
      })
  }

  changeNewBookmark = (event) => {
    this.setState({ newBookmark: event.target.value })
  }

  createNewBookmark = (event) => {
    event.preventDefault();
    // Post the new bookmark to our server
    axios.post(serverApi + '/bookmarks', { bookmarks: this.state.newBookmark })
      .then((response) => {
        // Success! Add the new bookmark to our array and clear the input
        const bookmarks = [...this.state.bookmarks, response.data]
        this.setState({ bookmarks, newBookmark: '' })
      })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.createNewBookmark}>
          <label>New Bookmark:</label><input value={this.state.newBookmark} onChange={this.changeNewBookmark} />
        </form>
        <header>
          <h1 className="App-title">Bookmarks</h1>
        </header>
        <ul>
          {this.state.bookmarks.map((bookmark) => <li key={bookmark._id}>{bookmark.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;