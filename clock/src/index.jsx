import React from 'react';
import ReactDOM from 'react-dom';
import LoggingButton from './LoggingButton'
import NameForm from './NameForm'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }
}

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// ) 

// ReactDOM.render(
//     <LoggingButton />,
//     document.getElementById('root')
// )

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
)

// setInterval(tick, 1000)


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
