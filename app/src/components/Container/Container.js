import React, { useState, useEffect } from 'react'
import Joke from '../Joke/Joke'
import { 
  Wrapper, NewJokeButton, BottomTextContainer, BottomLinkContainer, BottomLink 
} from '../styled'
import { jokeList } from '../../helpers'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Container = props => {
  const [currentJoke, setCurrentJoke] = useState("")
  
  const getJoke = () => {
    const jokes = jokeList.filter(joke => joke !== currentJoke)
    return jokes[Math.floor(Math.random() * jokes.length)]
  }
  
  // eslint-disable-next-line
  useEffect(() => { 
    currentJoke || setCurrentJoke(getJoke())
  })

  return (
    <Wrapper>
      <NewJokeButton
        onClick={() => setCurrentJoke(getJoke())}  
      >
        Get New Joke
      </NewJokeButton>
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