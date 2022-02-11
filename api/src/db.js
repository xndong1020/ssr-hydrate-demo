const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message)
  }
  console.log('Connected to the in-memory SQlite database.')
})

db.serialize(function () {
  db.run('CREATE TABLE users (id INTEGER, name TEXT, email TEXT, password TEXT)')
  let stmt = db.prepare('INSERT INTO users VALUES (?,?,?,?)')
  
  const userList = [
    { id: 1, name: 'Leanne Graham', email: '1@test.com', password: 'pw1' },
    { id: 2, name: 'Ervin Howell', email: '2@test.com', password: 'pw2' },
    { id: 3, name: 'Clementine Bauch', email: '3@test.com', password: 'pw3' },
    { id: 4, name: 'Patricia Lebsack', email: '4@test.com', password: 'pw4' },
    { id: 5, name: 'Chelsey Dietrich', email: '5@test.com', password: 'pw5' }
  ]

  for (var i = 0; i < userList.length; i++) {
    const {id, name, email, password} = userList[i]
    stmt.run(id, name, email, password)
  }

  db.run('CREATE TABLE admins (id INTEGER, name TEXT)')
  stmt = db.prepare('INSERT INTO admins VALUES (?,?)')

  const adminList = [
    { id: 1, name: 'Kurtis Weissant' },
    { id: 2, name: 'Nicholas John' },
    { id: 3, name: 'Gelann Reichert' },
    { id: 4, name: 'Morish Stanton' },
    { id: 5, name: 'Rey Padberg' }
  ]

  for (var i = 0; i < adminList.length; i++) {
    const { id, name } = adminList[i]
    stmt.run(id, name)
  }

  stmt.finalize()

  db.each('SELECT * FROM users', function (err, row) {
    console.log(row.id + ': ' + row.name + ': ' + row.email)
  })

  db.each('SELECT * FROM admins', function (err, row) {
    console.log(row.id + ': ' + row.name)
  })
})

module.exports = db
