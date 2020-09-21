import React, { useState, useEffect } from 'react'
import Joke from '../Joke/Joke'
import AddJoke from '../Modal/AddJoke'
import Footer from '../Footer/Footer'
import { Wrapper, JokeButton, TopLinkContainer, LoadingComponent } from '../styled'
import { getNewJoke, addJoke } from '../../helpers'

const Container = props => {
  const [currentJoke, setCurrentJoke] = useState("")
  const [jokeCollection, setJokeCollection] = useState()
  const [modalVisibility, setModalVisibility] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
    
  const getJokeCollection = async () => {
    const endpoint = `/data`
    setIsLoading(true)
    const response = await fetch(endpoint)
    const data = await response.json()
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    setJokeCollection(data)
    setCurrentJoke(data[Math.floor(Math.random() * data.length)])
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
          onClick={() => setCurrentJoke(getNewJoke(jokeCollection, currentJoke))}  
        >
          Get New Joke
        </JokeButton>
        <JokeButton
          onClick={toggleModalVisibility}
        >
          Add New Joke
        </JokeButton>
      </TopLinkContainer>
      {isLoading ? <LoadingComponent /> : <Joke joke={currentJoke} />}
      <Footer />
    </Wrapper>
  )
}

export default Container