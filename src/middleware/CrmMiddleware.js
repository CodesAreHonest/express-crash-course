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