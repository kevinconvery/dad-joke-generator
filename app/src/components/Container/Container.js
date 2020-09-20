import React, { useState, useEffect } from 'react'
import Joke from '../Joke/Joke'
import AddJoke from '../Modal/AddJoke'
import Footer from '../Footer/Footer'
import { Wrapper, JokeButton, TopLinkContainer } from '../styled'

const Container = props => {
  const [currentJoke, setCurrentJoke] = useState("")
  const [jokeCollection, setJokeCollection] = useState()
  const [modalVisibility, setModalVisibility] = useState(false)
  const [modalType, setModalType] = useState({ type: "none", state: "hidden" })
  
  const getNewJoke = () => {
    const jokes = jokeCollection.filter(joke => joke !== currentJoke)
    return jokes[Math.floor(Math.random() * jokes.length)]
  }

  const addJoke = jokeData => {
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
  
  const getJokeCollection = async () => {
    const endpoint = `/data`
    const response = await fetch(endpoint)
    const data = await response.json()
    setJokeCollection(data)
    setCurrentJoke(data[0])
  }

  const toggleModalVisibility = () => setModalVisibility(!modalVisibility)
  
  // eslint-disable-next-line
  useEffect(() => {
    jokeCollection || getJokeCollection()
  })

  return modalVisibility ? (
    <AddJoke 
      toggleModal={toggleModalVisibility}
      addJoke={addJoke} 
    />
  ) : (
    <Wrapper>
      <TopLinkContainer>
        <JokeButton
          onClick={() => setCurrentJoke(getNewJoke())}  
        >
          Get New Joke
        </JokeButton>
        <JokeButton
          onClick={toggleModalVisibility}
        >
          Add New Joke
        </JokeButton>
      </TopLinkContainer>
      <Joke joke={currentJoke} />
      <Footer />
    </Wrapper>
  )
}

export default Container