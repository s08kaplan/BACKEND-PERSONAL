"use strict"

module.exports = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log("Error handler working well relax");
    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause
    })
}