const mongoose = require('mongoose')
const { Schema } = mongoose

const jokeSchema = new Schema({
  opening: String,
  punchline: String,
  created_on: {type: Date, default: Date.now }
})

const Joke = mongoose.model('Joke', jokeSchema)


module.exports = {
  Joke
}