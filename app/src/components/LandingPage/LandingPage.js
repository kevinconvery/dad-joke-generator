import React from 'react'
import { LoadingComponent } from '../styled'
import Footer from '../Footer/Footer'
import Joke from '../Joke/Joke'

const LandingPage = props => {
  const { isLoading, currentJoke } = props
  return (
    <div>
      {isLoading ? <LoadingComponent /> : <Joke joke={currentJoke} />}
      <Footer />
    </div>
  )
}

export default LandingPage