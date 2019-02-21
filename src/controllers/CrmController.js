const BlogSchema = require('../models/CrmModel');
const mongoose = require('../../connection');
const Blog = mongoose.model('blog', BlogSchema);

const controller = {};

controller.insertBlog = (req, res) => {
    let blog = new Blog(req.body);
    blog.save((err, Blog) => {
        if (err) {
            res.send(err);
        }

        res.json(blog);
    })
}

controller.getAllBlogs = (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) { 
            res.send (err); 
        } else { 
            res.json(blogs); 
        }
    })
}

controller.getBlogByID = (req, res) => {
    Blog.findById((req.params.blogId), (err, blog) => {
        if (err) { res.send(err) }

        res.json(blog)
    })
}

controller.updateBlog = (req, res) => {
    Blog.findOneAndUpdate({_id: req.params.blogId}, req.body, {new: true}, (err, updatedBlog) => {
        if (err) {res.send(err)}

        res.json(updateBlog);
    })
}

controller.deleteBlog = (req, res) => {
    Blog.deleteOne({
        _id: req.params.blogId
    }, (err) => {
        if (err) {res.send (err)}

        res.json ({message: `Blog Deleted Successfully. `})
    })
}

export default controller;
