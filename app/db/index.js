const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 7000
const { Schema } = mongoose
const dbConnectionObject = {
  endpoint: `mongodb://localhost/dad-jokes-forever`,
  params: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
}

const { endpoint, params } = dbConnectionObject
// connect to db
mongoose.connect(endpoint, params)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => console.log('Connected to MongoDB database!'))

const jokeSchema = new Schema({
  opening: String,
  punchline: String,
  created_on: {type: Date, default: Date.now }
})
const Joke = mongoose.model('Joke', jokeSchema)

app.get('/', (req, res) => {
  res.send(`We're connected!`)
})

app.get('/data', async (req, res) => {
  console.log('route hit')
  const results = await Joke.find()
  res.send(results)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})