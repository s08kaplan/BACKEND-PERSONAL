"use strict"

// const User = require("./src/models/user.model")
const Product = require("./src/models/products.model")
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
   const products = await data.products
  // !categoryId

  const category = async () => {
    const res = await fetch("https://dummyjson.com/products/categories")
    const data = await res.json()
    
    const obj = new Object(data.map(element => {
        let categoryId
        switch (element) {
            case "smartphones":
               return categoryId=1
  
            case "fragrances":
              return  categoryId=2
  
            case "groceries":
              return  categoryId=3
  
            case "furniture":
              return  categoryId=4
  
            case "womens-dresses":
              return  categoryId=5
  
            case "mens-shirts":
               return categoryId=6
  
            case "mens-watches":
               return categoryId=7
  
            case "womens-bags":
             return   categoryId=8
  
            case "sunglasses":
               return categoryId=9
  
            case "motorcycle":
               return categoryId=10
  
            case "laptops":
               return categoryId=11
  
            case "skincare":
              return  categoryId=12
  
            case "home-decoration":
               return categoryId=13
  
            case "tops":
               return categoryId=14
  
            case "womens-shoes":
               return categoryId=15
  
            case "womens-watches":
               return categoryId=16
  
            case "womens-jewellery":
              return  categoryId=17
  
            case "automotive":
               return categoryId=18
  
            case "lighting":
              return  categoryId=19
  
            case "mens-shoes":
              return  categoryId=20
  
                
            default:
                categoryId= 21
                break;
        }
    }))
    console.log(obj);
  }
  
  category()

  for(let key in products){
   await Product.create({
        categoryId : products.map(element => {
          let categoryId
          switch (products[key].category) {
              case "smartphones":
                 return categoryId=1
    
              case "fragrances":
                return  categoryId=2
    
              case "groceries":
                return  categoryId=3
    
              case "furniture":
                return  categoryId=4
    
              case "womens-dresses":
                return  categoryId=5
    
              case "mens-shirts":
                 return categoryId=6
    
              case "mens-watches":
                 return categoryId=7
    
              case "womens-bags":
               return   categoryId=8
    
              case "sunglasses":
                 return categoryId=9
    
              case "motorcycle":
                 return categoryId=10
    
              case "laptops":
                 return categoryId=11
    
              case "skincare":
                return  categoryId=12
    
              case "home-decoration":
                 return categoryId=13
    
              case "tops":
                 return categoryId=14
    
              case "womens-shoes":
                 return categoryId=15
    
              case "womens-watches":
                 return categoryId=16
    
              case "womens-jewellery":
                return  categoryId=17
    
              case "automotive":
                 return categoryId=18
    
              case "lighting":
                return  categoryId=19
    
              case "mens-shoes":
                return  categoryId=20
    
                  
              default:
                  categoryId= 21
                  break;
          }
      }),
        
        category : products[key].category,
        title: products[key].title,
        description: products[key].description,
        brand: products[key].brand,
        price: products[key].price,
        image: products[key].image,
        discountPercentage:0.5 ,
        stock_count: products[key].stock_count,
    })
} 

console.log("***SYNCRONIZED***");
}



