import React from 'react'
import { JokeTextContainer } from '../styled'

const Joke = props => {
  const { joke } = props
  const { intro, punchline } = joke
  return (
    <JokeTextContainer>
      <span className="joke-text">{intro}</span>
      <span className="joke-text">{punchline}</span>
    </JokeTextContainer>
  )
}

export default Joke