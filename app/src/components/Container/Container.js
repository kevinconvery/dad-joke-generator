import React, { useState, useEffect } from 'react'
import Joke from '../Joke/Joke'
import AddJoke from '../Modal/AddJoke'
import Footer from '../Footer/Footer'
import { Wrapper, JokeButton, TopLinkContainer } from '../styled'
import { getNewJoke, addJoke } from '../../helpers'

const Container = props => {
  const [currentJoke, setCurrentJoke] = useState("")
  const [jokeCollection, setJokeCollection] = useState()
  const [modalVisibility, setModalVisibility] = useState(false)
  const [modalType, setModalType] = useState({ type: "none", state: "hidden" })
    
  const getJokeCollection = async () => {
    const endpoint = `/data`
    const response = await fetch(endpoint)
    const data = await response.json()
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
      <Joke joke={currentJoke} />
      <Footer />
    </Wrapper>
  )
}

export default Container