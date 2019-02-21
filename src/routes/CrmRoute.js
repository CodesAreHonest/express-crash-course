import express from "express";
import controller from '../controllers/CrmController';

const router = express.Router();

const {
    insertBlog, 
    getAllBlogs, 
    getBlogByID, 
    updateBlog, 
    deleteBlog 
} 
= controller;

router.post('/newBlog', insertBlog);
router.get('/getBlogs', getAllBlogs);
router.get('/blog/:blogId', getBlogByID);
router.post('/updateBlog/:blogId', updateBlog);
router.delete('/deleteBlog/:blogId', deleteBlog); 

export default router; 