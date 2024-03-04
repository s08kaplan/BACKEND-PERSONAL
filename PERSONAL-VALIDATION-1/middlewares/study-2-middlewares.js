const usersInDatabase = require("../users.json")

const getUsersAll = ( req, res, next ) => {
   const { name, username, email} = req.query 
   req.userInfo = name + " " + username + " " + email
   try {
    if(!name || !username || !email){
        throw new Error("You must be entered name, username and email please check again!")
        
    }
    next()
   } catch (error) {
    console.log("Something went wrong ",error);
    res.status(404).send(error.message)
   }

}

const authenticateUser = (req, res, next ) => {
    const { name, username, email} = req.query 
    req.userInfo = name + " " + username + " " + email 
    try {
     if(!name || !username || !email){
        throw new Error("name,username and email required",error)
    }
   else if(name && username && email ){
    const requiredUser = usersInDatabase.find(user => user.name === name && user.username === username && user.email === email)
    if(!requiredUser){
        res.status(404).send("No match, please check again or register please 🙏")
    }
    
    res.send("welcome to the User Page")
    next()
    
   }
    } catch (error) {
        console.log(error);
        res.status(404).send("Invalid entry please check your information again!")
    }
    
}
const authenticateUserBody = (req, res, next ) => {
    const { name, username, email} = req.body 
    req.body.userInfo = name + " " + username + " " + email 
    try {
     if(!name || !username || !email){
        throw new Error("name,username and email required",error)
    }
   else if(name && username && email ){
    const requiredUser = usersInDatabase.find(user => user.name === name && user.username === username && user.email === email)
    if(!requiredUser){
        res.status(404).send("No match, please check again or register please 🙏")
    }
    
    // res.send("welcome to the User Page")
    next()
    
   }
    } catch (error) {
        console.log(error);
        res.status(404).send("Invalid entry please check your information again!")
    }
    
}

module.exports = { getUsersAll, authenticateUser, authenticateUserBody }