const db = require('../db')

function findAll() {
  return new Promise((resolve, reject) => {
    db.all(`select * from admins`, (err, rows) => {
      if (err) reject(err)
      resolve(rows)
    })
  })
}

module.exports = {
  findAll: findAll
}
