import React, { Component } from 'react'
import api from '../api/init';

export default class AddBookmarkForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loginError: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        api.post('/bookmarks', {
            title: event.target.title.value,
            url: event.target.url.value
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.error('Problem adding bookmark: ', error)
            this.addError()
        })

        // try {
        //     const res = await api.post('/bookmarks', {
        //         title: event.target.title.value,
        //         url: event.target.url.value
        //     })
        //     console.log(res)
        // } catch (error) {
        //     console.error('Problem adding bookmark: ', error)
        //     this.loginError()
        // }
    }

    addError = () => {
        this.setState({
            loginError: 'Problem adding bookmark'
        })
    }

    render() {
        const { addError } = this.state
        return (
            <div>
                <h2>Add a new bookmark</h2>
                <form onSubmit={this.handleSubmit}>
                    {addError && <p>{addError}</p>}
                    <label>Title: <input type="text" name="title" /></label><br />
                    <label>Url: <input type="text" name="url" /></label><br />
                    <button type="submit">Add Bookmark</button>
                </form>
            </div>
        )
    }
}
