const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


mockUsers = [
    {id: 1, username: "Ali", firstName: "Abdullah"}, 
    {id: 2, username: "Veli", firstName: "Hakan"}, 
    {id: 3, username: "Danny", firstName: "Deli"} 
]


app.get('/', (req, res) => res.send('Hello, Welcome to our World!'))
app.get("/users", (req, res) => {
    res.send(mockUsers)
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