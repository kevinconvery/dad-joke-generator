import React from 'react'

const Joke = props => {
  const { joke } = props
  const { intro, punchline } = joke
  return (
    <div className="Joke">
      <span className="joke-text">{intro}</span>
      <span className="joke-text">{punchline}</span>
    </div>
  )
}

export default Joke