"use strict";

module.exports = async (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("I am catching all errors relax just find out the error ");
  res.status(errorStatusCode).send({
    error: true,
    message: err.message,
    cause: err.cause,
  });
};
