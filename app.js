// Importing the express module
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser'); // Middleware

const productRoutes = require('./routes/product');


const app = express();
app.use(express.json())
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/create', productRoutes);

app.use('/product', productRoutes);


//mongoose connect//
module.exports = {
    MongoDBConnection: async () => {
        try {
            await mongooseLib.connect('mongodb+srv://cheolwonjeong44:won589212@cluster0.c8nbwsh.mongodb.net/?retryWrites=true&w=majority');
        console.log("database connect")
        
        } catch (error) {
            console.log(error)
        }
    }
}





// let dev_db_url = "mongodb+srv://cheolwonjeong44:won589212@nodeproject01.tdcvwte.mongodb.net/?retryWrites=true&w=majority";
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));





// Route to Homepage
app.get('/', (req, res) => {
    let data = {
        name: 'Akashdeep',
        hobbies: ['playing football', 'playing chess', 'cycling']
    }
 
    res.render('home', { data: data });
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});




const product = require('./routes/product'); 

// Setting up the server at port 3000
app.listen(3000 , ()=>{
   console.log("server running");
});


//const Router = require("./routes")