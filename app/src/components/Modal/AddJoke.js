import React from 'react'
import { Wrapper, JokeButton, TopLinkContainer } from '../styled'
import Footer from '../Footer/Footer'

const AddJoke = props => {
  const { toggleModal } = props
  return (
    <Wrapper 
      backgroundColor="rebeccapurple"
      modal
    >
      <TopLinkContainer>
        <JokeButton onClick={toggleModal}>
          Return to Menu
        </JokeButton>
      </TopLinkContainer>
      <Footer />
    </Wrapper>
  )
}

export default AddJoke