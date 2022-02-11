const db = require('../db')

async function loginUser({ email, password }) {
  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
  return new Promise((resolve, reject) => {
    db.get(sql, [email, password], (err, row) => {
      if (err) reject(err)
      if (!row) reject(new Error('User not found'))
      resolve(row)
    })
  })
}

module.exports = {
  loginUser: loginUser
}
