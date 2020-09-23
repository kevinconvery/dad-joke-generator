import React, { useState, useEffect } from 'react'
import AddJoke from '../Modal/AddJoke'
import Login from '../Modal/Login'
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import { Wrapper } from '../styled'
import { getNewJoke, addJoke } from '../../helpers'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import '../../styles/common.styles.css'

const Container = props => {
  const [currentJoke, setCurrentJoke] = useState("")
  const [jokeCollection, setJokeCollection] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const getJokeCollection = async () => {
    const endpoint = `/data`
    setIsLoading(true)
    const response = await fetch(endpoint)
    const data = await response.json()
    // to show the loader, timeout needs to be here:
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    setJokeCollection(data)
    setCurrentJoke(data[Math.floor(Math.random() * data.length)])
  }

  const changeJoke = () => setCurrentJoke(getNewJoke(jokeCollection, currentJoke))

  // eslint-disable-next-line
  useEffect(() => {
    jokeCollection || getJokeCollection()
  })

  return (
    <Router>
      <Wrapper>
        <Header 
          pageType="MAIN"
          getNewJoke={changeJoke}
          isLoggedIn={isLoggedIn} 
        />
        
        <Switch>
          <Route exact path="/addjoke">
            <AddJoke
              addJoke={addJoke}
            />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <LandingPage 
              isLoading={isLoading} 
              currentJoke={currentJoke}  
            />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  )
}

export default Container


