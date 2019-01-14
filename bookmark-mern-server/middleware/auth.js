const passport = require('passport')
const User = require('../models/user')
const JWT = require('jsonwebtoken')
const PassportJwt = require('passport-jwt')
require('dotenv').config()

const jwtSecret = process.env.JWT_SECRET
const jwtAlgorithm = 'HS256'
const jwtExpiresIn = '3h'

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy())

passport.use(new PassportJwt.Strategy({
  jwtFromRequest: PassportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
  algorithms: [jwtAlgorithm]
}, (payload, done) => {
  User.findById(payload.sub).then((user) => {
    if (user) {
      user.token = payload
      done(null, user)
    } else {
      done(null, false)
    }
  }).catch((error) => {
    done(error, false)
  })
}))

const signJwtForUser = (req, res) => {
  const token = JWT.sign(
    //Payload
    {
      sub: req.user._id.toString(),
      email: req.user.email
    },
    //Secret
    jwtSecret,
    //Config
    {
      algorithm: jwtAlgorithm,
      expiresIn: jwtExpiresIn
    }
  )
  res.json({
    token: token
  })
}

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const register = (req, res, next) => {
  // Janels
  //   User.register(new User({
  //     email: req.body.email,
  //     role: req.body.role || 'user'
  //   }), req.body.password, (err, user) => {
  //     if (err) {
  //       return res.status(500).send(err.message);
  //     }
  //     res.status(200).json(user)
  //   })
  User.register(new User({
    email: req.body.email,
    role: 'user'
  }), req.body.password, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    // Preventse a newly registered user from having to also log in; (Passport will create a session) using the local strategy
    passport.authenticate('local')(req, res, () => {
      req.session.role = req.user.role || 'guest'
      // res.status(200).json(user)
      req.user = user
      next()
    });
  });
}



// const login = (req, res, next) => {
//   // Set the session role to the user role so we can use it for authorization
//   req.session.role = req.user.role || 'guest' // default to guest if no user or role
//   console.log('\n----Session applied on login-----\n\n', req.session)
//   // res.status(200).json(req.user) // not good practice to send back entire user object
// }

// Logout the current user
const logout = (req, res) => {
  req.logout()
  req.session.role = 'guest'
  res.sendStatus(200)
}

// Used as middleware to check if the currently logged in user has admin role
const isAdmin = (req, res, next) => {
  if (req.session.role && req.session.role === 'admin') {
    next()
  } else {
    res.sendStatus(403)
  }
}

const isRegisteredUser = (req, res, next) => {
  console.log('\n-----Session details checked for if user registered-----\n\n', req.session)
  if (req.session.role && (req.session.role == 'user' || req.session.role == 'admin')) {
    next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = {
  initializePassport: passport.initialize(),
  passportSession: passport.session(),
  requireJwt: passport.authenticate('jwt'),
  signJwtForUser,
  login: passport.authenticate('local'),
  // login,
  logout,
  isAdmin,
  isRegisteredUser,
  register
}