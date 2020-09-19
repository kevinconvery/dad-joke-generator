import React, { useState, useEffect } from 'react'
import Joke from '../Joke/Joke'
import { 
  Wrapper, NewJokeButton, BottomTextContainer, BottomLinkContainer, BottomLink 
} from '../styled'
import { jokeList } from '../../helpers'
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
    // const results = response.json()
    // console.log(`results are ${JSON.stringify(results, 4, null)}`)
    // setJokeCollection(results)
  }
  
  // eslint-disable-next-line
  useEffect(() => {
    if (!jokeCollection) {
      getJokeCollection()
    }
    // console.log(currentJoke)
  })

  return (
    <Wrapper>
      <NewJokeButton
        onClick={() => setCurrentJoke(getNewJoke())}  
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