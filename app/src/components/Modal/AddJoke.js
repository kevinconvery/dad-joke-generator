import React, { useState } from 'react'
import { 
  Wrapper, 
  NewJokeForm, 
  JokeFormText, 
  JokeFormInput, 
  JokeFormLabel,
  JokeFormSubmitButton,
  TopLinkContainer
} from '../styled'
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom"

const AddJoke = props => {
  const [openingText, setOpeningText] = useState("")
  const [punchlineText, setPunchlineText] = useState("")

  const { addJoke } = props

  const handleSubmit = e => {
    e.preventDefault()
    addJoke({
      opening: openingText,
      punchline: punchlineText
    })
    setOpeningText("")
    setPunchlineText("")
  }

  return (
    <Wrapper 
      backgroundColor="var(--purple)"
      modal
    >
      <TopLinkContainer>
        <Link 
          to="/"
          className="top-inverted-link"
        >
          Return to Main
        </Link>
      </TopLinkContainer>
      <NewJokeForm onSubmit={handleSubmit}>
        <JokeFormInput>
          <JokeFormLabel>Opening</JokeFormLabel>
          <JokeFormText 
            onChange={e => setOpeningText(e.target.value)}
            value={openingText} 
            required
          />
        </JokeFormInput>
        <JokeFormInput>
          <JokeFormLabel>Punchline</JokeFormLabel>
          <JokeFormText 
            onChange={e => setPunchlineText(e.target.value)}
            value={punchlineText} 
            required
          />
        </JokeFormInput>
        <JokeFormSubmitButton>Submit</JokeFormSubmitButton>
      </NewJokeForm>
      <Footer />
    </Wrapper>
  )
}


export default AddJoke