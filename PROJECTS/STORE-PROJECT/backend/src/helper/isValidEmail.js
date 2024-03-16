"use strict"

module.exports = (email) => {
  const mailPattern = /^[a-zA-Z0-9.%+-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (mailPattern.test(email)) return email
}