import React from 'react'
import { JokeTextContainer } from '../styled'

const Joke = props => {
  const { joke } = props
  const { opening, punchline } = joke
  return (
    <JokeTextContainer>
      <span className="joke-text">{opening}</span>
      <span className="joke-text">{punchline}</span>
    </JokeTextContainer>
  )
}

export default Joke