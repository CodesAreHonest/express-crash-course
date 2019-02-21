const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./src/routes/CrmRoute')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});

const BlogSchema = require('./src/models/CrmModel');
const blogModel = mongoose.model('blog', BlogSchema)

app.post ('/newBlog', (req, res) => {
    let blog = new blogModel(req.body);
    blog.save((err, blogModel) => {
        if (err) {
            res.send(err);
        }

        res.json(blog);
    })

})

let getAllBlogs = (req, res) => {
    blogModel.find({}, (err, blogs) => {
        if (err) { res.send (err); } else { res.json(blogs); }
    })
}

app.get('/getBlogs', getAllBlogs);

let getBlogByID = (req, res) => {
    blogModel.findById((req.params.blogId), (err, blog) => {
        if (err) { res.send(err) }

        res.json(blog)
    })
}

app.get('/blog/:blogId', getBlogByID);

let updateBlog = (req, res) => {
    blogModel.findOneAndUpdate({_id: req.params.blogId}, req.body, {new: true}, (err, updatedBlog) => {
        if (err) {res.send(err)}

        res.json(updateBlog);
    })
}

app.put('/updateBlog/:blogId', updateBlog);

let deleteBlog = (req, res) => {
    blogModel.deleteOne({
        _id: req.params.blogId
    }, (err) => {
        if (err) {res.send (err)}

        res.json ({message: `Blog Deleted Successfully. `})
    })
}

app.delete('/deleteBlog/:blogId', deleteBlog);


// const Cat = mongoose.model('Cat', {
//     name: String
// })

// const kitty = new Cat({name: 'mimi'});

// kitty.save().then(res => {
//     console.log (res);
//     console.log ('Meow');
// })

// Application Level Middleware - Execute every time application receives a request
// app.use((req, res, next) => {
//     console.log ('Time ', Date.now())
// })

// app.get('/', (req, res, next) => {
//     console.log (`Request Method: ${req.method}`)

//     next();
// }, (req, res, next) => {
//     console.log (`Request Original URL: ${req.originalUrl}`);
//     next();
// }, (req, res, next) => {
//     res.send (`Request was Successful.`)
// });

// routes(app);

app.use (express.static('public'));

app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}`)
})