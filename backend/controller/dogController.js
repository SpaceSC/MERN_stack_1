const Dog = require('../models/dog.model')

const dog_create_get = (req, res) => {
  Dog.find()
  .then(dogs => res.json(dogs))
  .catch(err => console.log({message: "Res.json error"}))
}

const dog_create_post = (req, res) => {
  const dog = new Dog({
    input1: req.body.input1, 
    input2: req.body.input2,
  })
  dog.save()
    .then(res.json({message: "Res.send working"}))
    .catch(err => console.log(err))
}


module.exports = {
  dog_create_get,
  dog_create_post
}