const { User } = require("../db");
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = req.split(" ");
  const jwtToken = words;
  const decodedValue = jwt.verify(jwtToken, secret)

  if(decodedValue.username) {
    next()
  } else {
    res.status(403).json({
      msg: "You're not authenticated"
    })
  }
}

module.exports = userMiddleware;
