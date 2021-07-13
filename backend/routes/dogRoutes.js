const express = require('express')
const router = express.Router()
// const Dog = require('../models/dog.model') // now it is in the controller
const dogController = require('../controller/dogController')

router.get('/', dogController.dog_create_get)

router.post('/', dogController.dog_create_post)

// routers before using controller

// router.get('/', (req, res) => {
//   Dog.find()
//   .then(dogs => res.json(dogs))
//   .catch(err => console.log({message: "Res.json error"}))
// })

// router.post('/', (req, res) => {
//   const dog = new Dog({
//     input1: req.body.input1, 
//     input2: req.body.input2,
//   })
//   dog.save()
//     .then(res.json({message: "Res.send working"}))
//     .catch(err => console.log(err))
// })

module.exports = router