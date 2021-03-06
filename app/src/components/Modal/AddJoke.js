import React, { useState } from 'react'
import { 
  Wrapper, 
  NewJokeForm, 
  JokeFormText, 
  JokeFormInput, 
  JokeFormLabel,
  JokeFormSubmitButton,
} from '../styled'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

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
      <Header pageType="ADD_JOKE" />
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