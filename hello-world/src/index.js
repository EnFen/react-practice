import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// let h1 = React.createElement('h1', {
//     style: {
//         color: 'red'
//     },
//     class: 'my-class'
// }, React.createElement('ul', {},
//     React.createElement('li', {}, "Item 1"),
//     React.createElement('li', {}, "Item 2"),
//     React.createElement('li', {}, "Item 3")
// ))

let element = (
    <h1 style={{ color: 'red' }} class='my-class'>
        <ul>
            <li>List Item 1 </li>
            <li> List Item 2 </li>
            <li> List Item 3 </li>
        </ul>
    </h1>
)

function Project(props) {
    return (
        <div id={props.name}>
            <a href={props.link}>
                <h3>{props.title}</h3>
            </a>
            {props.description ? <p>{props.description}</p> : ''}
            {props.children}
        </div>
    )
}

let projects = [
    { title: 'My Awesome Project', description: 'lorem ispsum dolor', link: 'http://google.com' },
    { title: 'Another Project!', link: 'http://amazon.com', description: 'Lorem ipsum dolor sit amet...' },
    { title: 'Project X' }
]

function MyApp() {
    return (
        <div>
            {
                projects.map((proj) => <Project title={proj.title} description={proj.description} link={proj.link} />)
            }
            {/* {<Project title='My Awesome Project' description='lorem ispsum dolor' link='http://google.com' />
            <Project title='Another Project!' link='http://amazon.com'>
                Lorem ipsum dolor sit amet...
            </Project>
            <Project title='Project X' />} */}
        </div>
    )
}


ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
)



// ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();