'use strict'
const express = require('express')
const app = express()
const PORT = 8000
// const middleFunction1 = (req,res,next)=>{
//      console.log(`${req.method},${req.url}`);  // 9. sorunun cevabi
//     //  console.log(req.query.a, req.query.b);
//      const {a,b}=req.query
//     //  console.log(a,b);
//     // console.log(toplam);
//     req.toplam = parseInt(a) + parseInt(b) // burada global bir degisken olusturduk ve diger middlewarede ulasilmasini sagladik.
//      next()
// }
// const middleFunction2 = (req,res,next)=>{
//      console.log("middleware 2 works");
//     //  console.log(req.toplam);
//      next()
// }
const [middleFunction1,middleFunction2] = require('./middlewares')
app.use(middleFunction1,middleFunction2)
app.all('/',(req,res) => {
  const {toplam} = req
  res.send({
    message:"welcome",
    toplam
  })
})
app.get('/deneme',(req,res) =>{
  res.send({
    message:"burasi deneme",
    toplam:req.toplam
  })
})
app.listen( PORT, ()=> {
  console.log(`server calisiyor ${PORT}`);
})

// Request ; http://localhost:8000/?a=7&b=6
// request2 : http://localhost:8000/deneme?a=7&b=6