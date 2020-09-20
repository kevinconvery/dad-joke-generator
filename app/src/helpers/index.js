export const jokeList = [
  {
    intro: `I've been thinking of selling a home surgical kit.`,
    punchline: `I'll call it "Suture Self".`
  },
  {
    intro: `Why couldn't the green pepper practice archery?`,
    punchline: `He didn't habanero.`
  },
  {
    intro: `I spent time copying six pages of the dictionary today.`,
    punchline: `I learned next to nothing.`
  },
  {
    intro: `Police have arrested the world tongue-twister champion.`,
    punchline: `I imagine she'll be given a long sentence.`
  },
  {
    intro: `Stadiums are bound to be hotter this season.`,
    punchline: `They'll be missing all their fans.`
  }
]

export const getNewJoke = (all, current) => {
  const jokes = all.filter(joke => joke !== current)
  const newJoke = jokes[Math.floor(Math.random() * jokes.length)]
  return newJoke
}

export const addJoke = jokeData => {
  const endpoint = '/data'
  fetch(endpoint, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(jokeData)
  })
  .then(response => response.json())
  .then(data => console.log(data))
}