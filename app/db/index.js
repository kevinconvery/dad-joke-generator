const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 7000
const { Schema } = mongoose
const dbConnectionString = `mongodb://localhost/dad-jokes-forever`
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

const Joke = mongoose.model('Joke', { opening: String, punchline: String })

app.get('/', (req, res) => {
  res.send(`We're connected!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})