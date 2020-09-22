import React from 'react'
import { JokeTextContainer, JokeText } from '../styled'

const Joke = props => {
  const { joke } = props
  const { opening, punchline } = joke
  return (
    <JokeTextContainer>
      <JokeText>{opening}</JokeText>
      <JokeText>{punchline}</JokeText>
    </JokeTextContainer>
  )
}

export default Joke