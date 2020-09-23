import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: var(--font-stack);
  background: ${props => props.backgroundColor || "var(--pink)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => props.modal && css`
    z-index: 2
  `}
`

export const TopLinkContainer = styled.div`
  width: 15rem;
  height: 5rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const TopLinkButton = styled.button`
  margin: 0 1rem;
  padding: 2rem 1rem;
  background: ${props => props.backgroundColor ? props.backgroundColor : "var(--dark-pink)"};
  border: none;
  border-radius: 100%;
  transition: all 1s ease-in-out;
  display: flex;
  font-family: var(--font-stack);
  color: white;
  outline: none;

  :hover {
    background: ${props => props.hoverColor ? props.hoverColor : "var(--purple)"};
    opacity: 0.8;
    box-shadow: 2px 4px 2px ${props => props.shadowColor ? props.shadowColor : "var(--darker-pink)"};
  }
`

export const JokeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const JokeText = styled.span`
  font-size: 2rem;
  color: white;
`

export const BottomTextContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
  font-size: 1.5rem;
  display: flex;
`

export const BottomLinkContainer = styled.span`
  margin-left: 1rem;
`

export const BottomLink = styled.a`
  color: white;
  margin: 0.25rem 0.5rem 0 0.25rem;
  transition: all 1s ease-in-out;

  :hover {
    color: black;
  }
`

export const NewJokeForm = styled.form`
  width: 30vw;
  background: blue;
  border: 3px solid white;
  padding: 1rem .75rem;
  display: flex;
  flex-direction: column;
`

export const JokeFormInput = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(30vw -1rem);
`

export const JokeFormText = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: green;
  outline: none;
`

export const JokeFormLabel = styled.label`
  color: white;
`

export const JokeFormSubmitButton = styled.button`
  border: none;
  outline: none;
  background: var(--pink);
  color: white;
  padding: 1rem 2rem;
  border-radius: 3px;
  margin-top: 1rem;
  width: 11rem;
  align-self: center;
`

const loaderRotation = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(360deg);
  }
`

export const LoadingComponent = styled.div`
  background: transparent;
  height: 300px;
  width: 300px;
  border: 3px solid white;
  border-radius: 50%;
  border-width: 2px 1px 0px 0px;
  animation: ${loaderRotation} 2s linear infinite;
`