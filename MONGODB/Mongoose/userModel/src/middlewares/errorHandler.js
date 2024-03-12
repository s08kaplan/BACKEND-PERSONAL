"use strict"

module.exports = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500
  console.log("errorHandler is running for you :))))");
  res.status(errorStatusCode).send({
    error: err.message,
    cause: err.cause
  })
}