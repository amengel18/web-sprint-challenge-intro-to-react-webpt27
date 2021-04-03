import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import CharacterDetails from './components/CharacterDetails'
import axios from 'axios'
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState()

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  const openDetails = id => {
    setCurrentCharacterId(id)
  }

  const closeDetails = () => {
    setCurrentCharacterId(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(response => {
        setCharacters(response.data)
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <StyledApp>
    <h1 className="Header">Characters</h1>
    {characters.map(elem => {
      return <Character key={characters.id} characters={elem} action={openDetails}/>
    })}
    {currentCharacterId && <CharacterDetails characterId={currentCharacterId} close={closeDetails} />}
  </StyledApp>
  );
}

const StyledApp = styled.div`
    color: navy;
    text-align: center;
`

export default App;
