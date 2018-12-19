const express = require('express')
const session = require('express-session')
const morgan = require('morgan')
const MongoStore = require('connect-mongo')(session)

let app = express()

app.use(morgan('dev'))

const store = new MongoStore({
    url: 'mongodb://localhost/session-demo',
    ttl: 1 * 24 * 60 * 60 // ttl =  time to live, set at 1 day (default if this ommitted is 14 days)
})

app.use(session({
    secret: 'There is no spoon',
    store: store
}))

app.get('/', function (req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (store.ttl) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
})



app.listen(3000)