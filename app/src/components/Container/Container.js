import React, { useState, useEffect } from 'react'
import Joke from '../Joke/Joke'
import { jokeList } from '../../helpers'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Container = props => {
  const getJoke = () => jokeList[Math.floor(Math.random() * jokeList.length)]
  const [currentJoke, setCurrentJoke] = useState({})

  useEffect(() => {
    setCurrentJoke(getJoke())
  }, [setCurrentJoke])

  return (
    <div className="Container">
      <button 
        className="new-joke-button"
        onClick={() => setCurrentJoke(getJoke())}  
      >
        Get New Joke
      </button>
      <Joke joke={currentJoke} />
      <div className="bottom-text">
        Kevin Convery 
        <span className="links">
          <a href="https://www.linkedin.com/in/kevin-convery/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/kevinconvery">
            <FaGithub />
          </a>    
        </span>
      </div>
    </div>
  )
}

export default Container