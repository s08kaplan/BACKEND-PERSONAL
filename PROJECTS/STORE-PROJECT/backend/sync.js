"use strict"

// const User = require("./src/models/user.model")
const Products = require("./src/models/products.model")
// module.exports = async () => {
    
//     //  if(User.isAdmin === undefined)  User.isAdmin = false
// // if(Products.image == null) Products.images = String


// for(let key in data){
//    await Products.create({
//         category : data[key].category,
//         title: data[key].category,
//         description: data[key].category,
//         brand: data[key].category,
//         price: data[key].category,
//         image: data[key].category,
//         discountPercentage:0.5 ,
//         stock_count: data[key].category,
//     })
// }

//      console.log("***SYNCRONIZED***");
// }

module.exports = async () => {
  const res =  await  fetch('https://dummyjson.com/products')
   const data = await res.json()
  for(let key in data){
   await Products.create({
        category : data[key].category,
        title: data[key].category,
        description: data[key].category,
        brand: data[key].category,
        price: data[key].category,
        image: data[key].category,
        discountPercentage:0.5 ,
        stock_count: data[key].category,
    })
} 

console.log("***SYNCRONIZED***");
}



