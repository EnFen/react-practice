import React from 'react'

class LoggingButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            caption: "Click Me!"
        }
    }

    handleClick = () => {
        console.log('this is:', this)
        if (this.state.caption == 'Click Me!') {
            this.setState({ caption: 'Do not click this button' })
        } else {
            this.setState({ caption: 'Click Me!' })
        }
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.caption}
            </button>
        )
    }
}

export default LoggingButton