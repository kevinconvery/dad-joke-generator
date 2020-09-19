import React from 'react'

import { 
  BottomTextContainer, BottomLinkContainer, BottomLink 
} from '../styled'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <BottomTextContainer>
      Kevin Convery
      <BottomLinkContainer>
        <BottomLink href="https://www.linkedin.com/in/kevin-convery/">
          <FaLinkedin />
        </BottomLink>
        <BottomLink href="https://github.com/kevinconvery">
          <FaGithub />
        </BottomLink>    
      </BottomLinkContainer>
    </BottomTextContainer>
  )
}

export default Footer