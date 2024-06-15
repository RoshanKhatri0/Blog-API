const Blog = require('../model/BlogModel')
const Category = require('../model/CategoryModel')

// Post blog
exports.postBlogs=async (req, res) => {
    try {
        const category = await Category.findById(req.body.category)
        if (!category) {
            return res.status(400).send('Invalid category')
        }

        const newBlog = new Blog({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category
        })
        const savedBlog = await newBlog.save()
        res.status(201).json(savedBlog)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// Get all blogs
exports.getBlogs = async(req,res)=>{
    try {
        const blogs = await Blog.find().populate('category')
        res.json(blogs)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// Get all blogs by Id
exports.getBlogsById = async(req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id).populate('category')
        if (blog) {
            res.json(blog)
        } else {
            res.status(404).send('Blog not found')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// Update blog
exports.updateBlog = async (req, res) => {
    try {
        const category = await Category.findById(req.body.category)
        if (!category) {
            return res.status(400).send('Invalid category')
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category
            },
            { new: true, runValidators: true }
        )
        if (updatedBlog) {
            res.json(updatedBlog)
        } else {
            res.status(404).send('Blog not found')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// Create category
exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Category({
            name: req.body.name
        })
        const savedCategory = await newCategory.save()
        res.status(201).json(savedCategory)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
