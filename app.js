const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// mongoose.connect("mongodb://localhost:27017/ReviewsDB", {
//    useUnifiedTopology: true, 
//    useNewUrlParser: true
// });
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

// const blogSchema = new Schema({
//    email: String,
//    name: String,
//    body: String
// });

app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/add', (req, res) => {
    res.render('Add');
});

app.post('/add', (req, res)=> {
    res.render('Home');
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});