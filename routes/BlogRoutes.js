const express=require('express')
const { postBlogs, getBlogs, getBlogsById, updateBlog, getAllCategories, createCategory } = require('../controller/BlogController')
const router=express.Router()

//Routes for Blog
router.post('/postblogs', postBlogs)
router.get('/allblogs', getBlogs)
router.get('/blog/:id', getBlogsById)
router.put('/blog/:id', updateBlog)

//Routes for Category
router.get('/allcategory', getAllCategories);
router.post('/postcategory', createCategory);

module.exports=router