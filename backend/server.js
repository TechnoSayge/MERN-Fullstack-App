const express = require('express'); // middleware requiring the package called express
const app = express(); //creates instance of express
const bodyParser = require('body-parser'); // middleware requiring the package called body-parser
const cors = require('cors'); // middleware requiring the package called cors
const mongoose = require('mongoose');
const PORT = 4000;

//adding middleware by using the app. that u enabled above when you created the instance of express
app.use(cors());  //passes te instance of cors
app.use(bodyParser.json()); //activates json method from the body-parser instance

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

//Start the Server on 4000
//Pass the first argument the PORT; then callback function once it's executed returns started successfully.
//Output that the servetr is running on port... 
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});