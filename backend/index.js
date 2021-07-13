
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


app.listen(PORT, () => {
  console.log(`MERN stack app listening at http://localhost:${PORT}`);
});