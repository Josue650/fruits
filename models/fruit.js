const mongoose = require('mongoose')

// Make a schema
const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true},
    readyToEat: Boolean
})


// Make a model from the schema
const Fruit = mongoose.model('Fruit', fruitSchema)

// Export the Model for use in the App

module.exports = Fruit
