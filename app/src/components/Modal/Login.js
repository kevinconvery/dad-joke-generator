import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Wrapper } from '../styled'

const Login = props => {
  return (
    <Wrapper 
      backgroundColor="var(--metallic)"
      modal
    >
      <Header pageType="LOGIN" />
      <Footer />
    </Wrapper>
  )
}

export default Login