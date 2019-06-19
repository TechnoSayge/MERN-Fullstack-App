const express = require('express'); // middleware requiring the package called express
const app = express(); //creates instance of express
const bodyParser = require('body-parser'); // middleware requiring the package called body-parser
const cors = require('cors'); // middleware requiring the package called cors
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model');

//adding middleware by using the app. that u enabled above when you created the instance of express
app.use(cors());  //passes te instance of cors
app.use(bodyParser.json()); //activates json method from the body-parser instance

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})


todoRoutes.route('/').get(function (req, res) {
    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Todo.findById(id, function (err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function (req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({ 'todo': 'todo added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/udpate/id').post(function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else
            todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;

        todo.save().then(todo => {
            res.json('Todo updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            })
    });
});

app.use('/todos', todoRoutes);


//Start the Server on 4000
//Pass the first argument the PORT; then callback function once it's executed returns started successfully.
//Output that the servetr is running on port... 
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});