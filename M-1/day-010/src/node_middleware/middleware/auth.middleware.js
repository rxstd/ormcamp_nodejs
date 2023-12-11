const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const auth = (req, res, next) => {
  //console.log(req.ip);
  next(createError(503, "누구세요?"));
};

module.exports = auth;
