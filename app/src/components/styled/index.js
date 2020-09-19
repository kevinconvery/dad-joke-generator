import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: var(--font-stack);
  background: ${props => props.backgroundColor || "var(--pink)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => props.modal && "z-index: 2"}
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

export const JokeButton = styled.button`
  margin: 0 1rem;
  padding: 2rem 1rem;
  background: var(--dark-pink);
  border: none;
  border-radius: 100%;
  transition: all 1s ease-in-out;
  display: flex;
  font-family: var(--font-stack);
  color: white;
  outline: none;

  :hover {
    background: var(--purple);
    opacity: 0.8;
    box-shadow: 2px 4px 2px var(--darker-pink);
  }
`

export const JokeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
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