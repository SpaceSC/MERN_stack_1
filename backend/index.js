
require("dotenv").config();
const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')

// dotenv to hide data, store them in .env file
const PORT = process.env.PORT || 5000;
const MONGO_LINK = process.env.MONGO_LINK;

// connect to mongoDB
mongoose.connect(`${MONGO_LINK}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, // recommended in connection
  //useCreateIndex: true, // only in devdelopment
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected!");
});

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

// endpoints


const dogRoutes = require('./routes/dogRoutes')

//routes (now both endpoints look the same, so once is enough)
app.use('/dog', dogRoutes)

// endpoints before routing

//const Dog = require("./models/dog.model");

// app.get('/dog', (req, res) => {
//   Dog.find()
//   .then(dogs => res.json(dogs))
//   .catch(err => console.log({message: "Res.json error"}))
// })

// app.post('/dog', (req, res) => {
//   const dog = new Dog({
//     input1: req.body.input1, 
//     input2: req.body.input2,
//   })
//   dog.save()
//     .then(res.json({message: "Res.send working"}))
//     .catch(err => console.log(err))
// })


app.listen(PORT, () => {
  console.log(`MERN stack app listening at http://localhost:${PORT}`);
});