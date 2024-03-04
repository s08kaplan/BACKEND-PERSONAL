const usersInDatabase = require("../users.json");

const authenticateUser = (req, res, next) => {
  const { username, email } = req.body;
  const requiredUser = usersInDatabase.find(
    (user) => user.username === username && user.email === email
  );

  try {
    if (!username || !email) {
      throw new Error("username and email must be filled!!!");
    } else if (!requiredUser) {
      throw new Error(
        "No matching data please check your username and email again or please register 🙏"
      );
    } else {
      req.authenticatedUser = requiredUser;
      next();
    }
  } catch (error) {
    res.status(404).send("sorry check your info again");
  }
};

const allUsersInfo = (req, res, next) => {
  req.allInfo = usersInDatabase
  next()
}

module.exports = { authenticateUser, allUsersInfo };
