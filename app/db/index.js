const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const port = 7000
const { Joke } = require('./models')
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

app.get('/', (req, res) => {
  res.send(`We're connected!`)
})

app.get('/data', async (req, res) => {
  console.log('route hit')
  const results = await Joke.find()
  res.send(results)
})

app.post('/data', async (req, res) => {
  const { opening, punchline } = req.body
  const newJoke = new Joke({ opening: opening, punchline: punchline })
  try {
    newJoke.save()
  } catch(err) {
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})