export const getNewJoke = (all, current) => {
  const jokes = all.filter(joke => joke !== current)
  const newJoke = jokes[Math.floor(Math.random() * jokes.length)]
  return newJoke
}

export const addJoke = async jokeData => {
  const endpoint = '/data'
  const response = await fetch(endpoint, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(jokeData)
  })
  await response.json()
}