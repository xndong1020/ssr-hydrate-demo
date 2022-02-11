const db = require('../db')

function findAll() {
  return new Promise((resolve, reject) => {
    db.all(`select * from users`, (err, rows) => {
      if (err) reject(err)
      resolve(rows)
    })
  })
}

function findById(id) {
  const sql = `SELECT * FROM users WHERE id = ?`
  return new Promise((resolve, reject) => {
    db.get(sql, [id], (err, row) => {
      if (err) reject(err)
      if (!row) reject(new Error('User not found'))
      resolve(row)
    })
  })
}

module.exports = {
  findAll: findAll,
  findById: findById
}
