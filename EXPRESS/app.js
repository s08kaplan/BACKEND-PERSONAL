const express = require('express')
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000


mockUsers = [
    {id: 1, username: "Ali", firstName: "Abdullah"}, 
    {id: 2, username: "Veli", firstName: "Hakan"}, 
    {id: 3, username: "Penny", firstName: "Beth"}, 
    {id: 4, username: "Jenny", firstName: "Jennifer"}, 
    {id: 5, username: "Harry", firstName: "Danny"}, 
    {id: 6, username: "Sevim", firstName: "Canan"}, 
    {id: 7, username: "Han", firstName: "Alp"}, 
    {id: 8, username: "Serhat", firstName: "Sedat"}, 
]


app.get('/', (req, res) => res.send('Hello, Welcome to our World!'))
app.get("/users", (req, res) => {
    console.log(req.query);
    const { query: { filter, value} } = req
  
   filter && value ? res.send(
    mockUsers.filter(user => user[filter].includes(value))
   )
   :
    res.send(mockUsers) 
})

app.post("/users", (req, res) => {
    const { body } = req
const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body}
mockUsers.push(newUser)
return res.status(201).send(newUser)
})


app.get("/users/:id", (req, res) => {
    console.log(req.params);
    const parsedId = parseInt(req.params.id)
    const findUser = mockUsers.find(user => user.id === parsedId)
    isNaN(parsedId) ? res.status(400).send({message: "Bad Request, INVALID ID"}): findUser ? res.send(findUser) : res.sendStatus(404)

    

})

app.get("/products", (req, res) => {
    res.send([
        {id:1, productName:"LG", price: 150},
        {id:2, productName:"TOSHIBA", price: 170},
        {id:3, productName:"SAMSUNG", price: 180}
    ])
})

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))