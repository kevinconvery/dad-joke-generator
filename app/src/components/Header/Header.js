import React from 'react'
import { TopLinkContainer, TopLinkButton } from '../styled'

const Header = props => {
  const { pageType, getNewJoke, addNewJoke, returnToMain } = props
  switch(pageType) {
    case "MAIN":
      return (
        <TopLinkContainer>
          <TopLinkButton
            onClick={getNewJoke}  
          >
            Get New Joke
          </TopLinkButton>
          <TopLinkButton
            onClick={addNewJoke}
          >
            Add New Joke
          </TopLinkButton>
        </TopLinkContainer>
      )
    case "ADD_JOKE":
      return (
        <TopLinkContainer>
          <TopLinkButton onClick={returnToMain}>
            Return to Menu
          </TopLinkButton>
        </TopLinkContainer>
      )
    default:
      return (
        <TopLinkContainer></TopLinkContainer>
      )
  }
}

export default Header