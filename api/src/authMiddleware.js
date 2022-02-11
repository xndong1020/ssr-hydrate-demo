const userService = require('./services/userService')

async function checkUser(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    res.sendStatus(401)
    return
  }
  const id = authHeader.charAt(authHeader.length - 1)
  
  try {
    const currentUser = await userService.findById(id)
    req['currentUser'] = currentUser
  } catch (error) {
     res.sendStatus(401)
     return
  }

  //authenticate user
  next()
}

module.exports = checkUser
