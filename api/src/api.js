const express = require('express')
const cors = require('cors')
const adminService = require('./services/adminService')
const userService = require('./services/userService')
const { loginUser } = require('./services/authService')
const checkUser = require('./authMiddleware')

const FAKE_TOKEN_PREFIX = 'MY_FAKE_TOKEN_FOR_USER_ID_'

const app = express()
app.use(cors())
app.use(express.json()) //parse request body as JSON

app.get('/users', async (req, res) => {
  try {
    const users = await userService.findAll()
    res.send(users)
  } catch (err) {
    res.sendStatus(404)
  }
})

// Start the auth process
app.use('/admins', checkUser, async (req, res) => {
  try {
    const admins = await adminService.findAll()
    res.send(admins)
  } catch (err) {
    res.sendStatus(404)
  }
})

// Start the auth process
app.post('/login', async (req, res) => {
  try {
    const user = await loginUser({
      email: req.body.email,
      password: req.body.password
    })
    res.send(`${FAKE_TOKEN_PREFIX}${user.id}`)
  } catch (error) {
    res.sendStatus(401)
  }
})

// return information about the currently logged in user
app.post('/me', checkUser, async (req, res) => {
  res.send(req['currentUser'])
})

// Log out of the app
app.post('/logout', (req, res) => {})

app.listen('5000', () => {
  console.log('API is listening on port 5000')
})
