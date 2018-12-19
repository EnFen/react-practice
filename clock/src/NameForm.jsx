import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '' }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value.toUpperCase() })
    }

    render() {
        return (
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        )
    }
}

export default NameForm