const jwt = require("jsonwebtoken");
const config = require("../config");

function authenticateUser(req, res, next) {
  console.log(req.get("header"));
  const token = req.header("Authorization");
  if (token) {
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = {
  authenticateUser,
};
