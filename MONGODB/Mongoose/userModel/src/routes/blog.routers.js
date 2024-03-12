"use strict"

const router=require("express").Router()


const {BlogCategory, BlogPost}=require("../controllers/blog.controller")


router.route('/categories')
    .get(BlogCategory.list)
    .post(BlogCategory.create)

router.route('/categories/:categoryId')
    .get(BlogCategory.read)
    .put(BlogCategory.update) // put patch aynı
    .patch(BlogCategory.update) 
    .delete(BlogCategory.delete)
  
router.route('/posts')
    .get(BlogPost.list)
    .post(BlogPost.create)

router.route('/posts/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update) // put patch aynı
    .patch(BlogPost.update) 
    .delete(BlogPost.delete)
  

module.exports=router