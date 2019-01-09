import React from 'react'
import ReactDOM from 'react-dom'
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
// import App from './App'
// import Users from './components/Users'
// import Contact from './components/Contact'
// import Nav from './components/Nav'
// import Notfound from './components/Notfound'
// import BookmarkList from './components/BookmarkList';
import Auth from './components/Auth';


const routing = (
    // <Router>
    //     <div>
    //         <Nav />
    //         <Switch>
    //             <Route exact path="/bookmarks" component={BookmarkList} />
    //             <Route exact path="/users" component={Users} />
    //             <Route path="/users/:id" component={Users} />
    //             <Route exact path="/" component={App} />
    //             <Route path="/contact" component={Contact} />
    //             <Route component={Notfound} />
    //         </Switch>
    //     </div>
    // </Router>
    <Auth />
)

ReactDOM.render(routing, document.getElementById('root'))
