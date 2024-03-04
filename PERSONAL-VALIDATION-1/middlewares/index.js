const usersInfo = require("../users.json")

const middlewareGet = (req, res, next) => {
  const { name, lastName } = req.query;
  const userInfo = name + " " + lastName;
  req.userInfo = userInfo;

  name && lastName
    ? next()
    : res
        .status(400)
        .json({ error: "Missing name or lastName please check your info" });
  // next()
};

const middlewarePost = (req, res, next) => {
  const { email, password } = req.query;
  email && password
    ? next()
    : res
        .status(400)
        .json({
          error: "you forgot the email or the password please check again!",
        });
  // next()
};

const getUserById = (req, res, next) => {
  const id = Number(req.params.id);
  const requiredUser = usersInfo.find((user) => user.id === id);

  if (!requiredUser) {
res.send(404,"User not found")
  }
  req.user = requiredUser 
  res.send({
    name: requiredUser.name,
    username: requiredUser.username,
    email: requiredUser.email,
  });
//   next();
res.redirect("/users/user")


};
const getUserByName = (req, res, next) => {
  const name = req.params.name;
  const requiredUser = usersInfo.find((user) => user.name === name);

  if (!requiredUser) {
res.send(404,"User not found")
  }
  req.user = requiredUser 
  res.send({
    name: requiredUser.name,
    username: requiredUser.username,
    email: requiredUser.email,
  });
//   next();
res.redirect("/users/user")
};

const getUserValue = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email
  const requiredUser = usersInfo.find((user) => user.name === name && user.email === email);

  if (!requiredUser) {
res.send(404,"User not found")
  }
  req.user = requiredUser 
  res.send({
    name: requiredUser.name,
    username: requiredUser.username,
    email: requiredUser.email,
  });
  next();
// res.redirect("/users/user")
};
module.exports = { middlewareGet, middlewarePost, getUserById, getUserValue, getUserByName };
