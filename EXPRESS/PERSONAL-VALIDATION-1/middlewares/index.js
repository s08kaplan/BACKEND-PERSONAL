const middlewareGet = (req, res, next) => {
    const {name, lastName} = req.query
    const userInfo = name+ " " + lastName
    req.userInfo = userInfo
    

    name && lastName ? next() : res.status(400).json({error: "Missing name or lastName please check your info"})
    // next()
}

const middlewarePost = (req, res, next) => {
    const {email, password } = req.query
    email && password ? next() : res.status(400).json({ error : "you forgot the email or the password please check again!"})
    // next()
}

module.exports = { middlewareGet, middlewarePost }