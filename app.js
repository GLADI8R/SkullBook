const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/ProfileDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const ProfileSchema = new Schema({
    email: String,
    name: String,
    desc: String
});

const Profile = mongoose.model('Profile', ProfileSchema)
Profile.createIndexes();

app.get('/', (req, res) => {
    Profile.find({}, function (err, profiles) {
        res.render('Home', { profiles: profiles });
    });
});

app.get('/add', (req, res) => {
    res.render('Add');
});

app.post('/add', (req, res) => {
    const profile = new Profile({
        email: req.body.email,
        name: req.body.name,
        desc: req.body.desc
    });
    // console.log(req.body);
    // res.render('Home');
    profile.save((err) => {
        if (!err) {
            res.redirect('/');
        }
    });
});

app.get('/delete', (req, res) => {
    res.render('delete.ejs');
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});