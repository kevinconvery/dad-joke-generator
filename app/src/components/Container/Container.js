import React, { useState, useEffect } from 'react'
import Joke from '../Joke/Joke'
import { 
  Wrapper, JokeButton, TopLinkContainer, BottomTextContainer, BottomLinkContainer, BottomLink 
} from '../styled'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Container = props => {
  const [currentJoke, setCurrentJoke] = useState("")
  const [jokeCollection, setJokeCollection] = useState()
  
  const getNewJoke = () => {
    const jokes = jokeCollection.filter(joke => joke !== currentJoke)
    return jokes[Math.floor(Math.random() * jokes.length)]
  }
  
  const getJokeCollection = async () => {
    const endpoint = `/data`
    const response = await fetch(endpoint)
    const data = await response.json()
    setJokeCollection(data)
    setCurrentJoke(data[0])
  }
  
  // eslint-disable-next-line
  useEffect(() => {
    jokeCollection || getJokeCollection()
  })

  return (
    <Wrapper>
      <TopLinkContainer>
        <JokeButton
          onClick={() => setCurrentJoke(getNewJoke())}  
        >
          Get New Joke
        </JokeButton>
        <JokeButton>
          Add New Joke
        </JokeButton>
      </TopLinkContainer>
      <Joke joke={currentJoke} />
      <BottomTextContainer>
        Kevin Convery
        <BottomLinkContainer>
          <BottomLink href="https://www.linkedin.com/in/kevin-convery/">
            <FaLinkedin />
          </BottomLink>
          <BottomLink href="https://github.com/kevinconvery">
            <FaGithub />
          </BottomLink>    
        </BottomLinkContainer>
      </BottomTextContainer>
    </Wrapper>
  )
}

export default Container