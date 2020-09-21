const express = require('express')
const { Joke } = require('../models')
const { jokeSeedData } = require('../seeds')
const router = express.Router()

router.get('/', async (req, res) => {
  console.log('route hit')
  const results = await Joke.find()
  res.send(results)
})

// a reset mechanism to reload the dummy joke data in the db
router.get('/reset', async (req, res) => {
  try {
    console.log('reset route hit')
    await Joke.deleteMany()
    await Joke.insertMany(jokeSeedData)
  } catch (err) {
    console.error(err)
  }
})

router.post('/', async (req, res) => {
  const { opening, punchline } = req.body
  const newJoke = new Joke({ opening: opening, punchline: punchline })
  try {
    newJoke.save()
  } catch(err) {
    console.log(err)
  }
})

module.exports = router