function checkToken(req, res, next) {

    const authHeader = req.headers.authorization
    if (!authHeader) {
      res.sendStatus(401)
      return
    }

  //authenticate user
  next()
}

module.exports = checkToken