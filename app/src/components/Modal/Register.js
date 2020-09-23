import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Wrapper } from '../styled'

const Register = props => {
  return (
    <Wrapper 
      backgroundColor="var(--metallic)"
      modal
    >
      <Header pageType="REGISTER" />
      <Footer />
    </Wrapper>
  )
}

export default Register