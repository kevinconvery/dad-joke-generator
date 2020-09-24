require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 7000
const { dataRoute } = require('./routes')
const { DB_ENDPOINT } = process.env
const dbConnectionObject = {
  endpoint: DB_ENDPOINT,
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

app.use(express.json())
// mount our routes
app.use('/data', dataRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})