import express from "express";
import controller from '../controllers/CrmController';

const router = express.Router();

router.post('/newBlog', (req, res) => {
    controller.insertBlog(req, res);
});

router.get('/getBlogs', (req, res) => {
    controller.getAllBlogs(req, res);
});

router.get('/blog/:blogId', (req, res) => {
    controller.getBlogByID(req, res);
});

router.get('/updateBlog/:blogId', (req, res) => {
    controller.updateBlog(req, res);
});

router.get('/deleteBlog/:blogId', (req, res) => {
    controller.deleteBlog(req, res);
}); 

export default router; 