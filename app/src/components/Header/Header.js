import React from 'react'
import { TopLinkContainer, TopLinkButton } from '../styled'
import { Link } from 'react-router-dom'

const Header = props => {
  const { pageType, getNewJoke } = props
  switch(pageType) {
    case "MAIN":
      return (
        <TopLinkContainer>
          <TopLinkButton
            onClick={getNewJoke}  
          >
            Get New Joke
          </TopLinkButton>
          <Link 
            to="/addjoke"
            className="top-link"
          >
            Add New Joke
          </Link>
        </TopLinkContainer>
      )
    case "ADD_JOKE":
    case "LOGIN":
    case "REGISTER":
      return (
        <TopLinkContainer>
          <Link to="/" className="top-inverted-link">
            Return to Menu
          </Link>
        </TopLinkContainer>
      )
    default:
      return (
        <TopLinkContainer></TopLinkContainer>
      )
  }
}

export default Header