import React, { Component } from 'react';
import Bookmark from './Bookmark';
import AddBookmarkForm from './AddBookmarkForm'
import api from '../api/init'

const bookmarkApi = '/bookmarks'

class BookmarkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: []
        }
    }

    componentDidMount() {
        api.get(bookmarkApi).then(res => {
            this.setState({ bookmarks: res.data })
        }).catch(err => {
            console.error(`Something went wrong trying to fetch the bookmarks. Error: ${err}`)
        })
    }

    addBookmark = (newBookmark) => {
        this.setState({
            bookmarks: [...this.state.bookmarks, newBookmark]
        })
    }

    render() {
        const { isLoggedIn, user } = this.props
        return (
            <div>
                <h1>Bookmarks</h1>
                {isLoggedIn && <AddBookmarkForm add={this.addBookmark} user={user} />}
                <ul>
                    {this.state.bookmarks.map(bookmark => {
                        return <Bookmark key={bookmark._id} bookmark={bookmark} />
                    })}
                </ul>
            </div>
        );
    }
}

export default BookmarkList;