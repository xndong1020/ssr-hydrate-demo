const express = require('express')
const db = require('./db')
const checkToken = require('./authMiddleware')

const FAKE_TOKEN_PREFIX = 'MY_FAKE_TOKEN_FOR_USER_ID_'

const app = express()
app.use(express.json()) //parse request body as JSON

app.get('/users', (req, res) => {
    db.all(`select * from users`, (err, rows) => {
        res.send(rows)
    })
})

// Start the auth process
app.use('/admins', checkToken, (req, res) => {
    db.all(`select * from admins`, (err, rows) => {
        res.send(rows)
    })
})

// Start the auth process
app.post('/login', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) res.sendStatus(401)
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
    db.get(sql, [email, password], (err, row) => {
      if (!row) res.sendStatus(401)
      res.send(`${FAKE_TOKEN_PREFIX}${row.id}`)
    })
})

// return information about the currently logged in user
app.post('/me', checkToken, (req, res) => {
  const id = req.headers.authorization.charAt(authHeader.length - 1)
  const sql = `SELECT * FROM users WHERE id = ?`
  db.get(sql, [id], (err, row) => {
    if (!row) res.sendStatus(401)
    res.send(row)
  })
})

// Log out of the app
app.post('/logout', (req, res) => {})

app.listen('5000', () => {
    console.log('API is listening on port 5000')
})