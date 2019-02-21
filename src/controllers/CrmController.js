// const BlogSchema = require('../models/CrmModel');
// const mongoose = require('../../connection');

import BlogSchema from '../models/CrmModel';
import mongoose from '../../connection';
const Blog = mongoose.model('blog', BlogSchema);

const controller = {};

controller.insertBlog = async (req, res) => {
    let blog = new Blog(req.body);
    await blog.save((err, Blog) => {
        if (err) {
            res.send(err);
        }

        res.json(blog);
    })
}

controller.getAllBlogs = async (req, res) => {
    await Blog.find({}, (err, blogs) => {
        if (err) { 
            res.send (err); 
        } else { 
            res.json(blogs); 
        }
    })
}

controller.getBlogByID = async (req, res) => {
    await Blog.findById((req.params.blogId), (err, blog) => {
        if (err) { res.send(err) }

        res.json(blog)
    })
}

controller.updateBlog = async (req, res) => {
    await Blog.findOneAndUpdate({_id: req.params.blogId}, req.body, {
        new: true,
        useFindAndModify: false,
    }, (err) => {
        if (err) {res.send(err)}

        res.json({'status': 'Success'});
    })
}

controller.deleteBlog = async (req, res) => {
    await Blog.deleteOne({
        _id: req.params.blogId
    }, (err) => {
        if (err) {res.send (err)}

        res.json ({message: `Blog Deleted Successfully. `})
    })
}

export default controller;
