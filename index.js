const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3003;
const cors = require('cors');
const hbs = require('express-handlebars');
const indexRouter = require('./routes/index');
const path = require("path");


mongoose.connect('mongodb+srv://Deni:Kokoto095@cluster0.baltp.mongodb.net/theNewsProject?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=> {
    console.log('Database connected...')
})

app.set('view engine', 'handlebars');
app.engine('handlebars', hbs())

app.use(express.static(path.resolve(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(indexRouter);

app.listen(port, () => {
    console.log('Server initialised...')
})