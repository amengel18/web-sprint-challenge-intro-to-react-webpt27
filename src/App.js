import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios'
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
 

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
       {
          characters.map((character) => {
            return <Character characters={character} ></Character>
          })
        }
    </StyledApp>
  );
}

const StyledApp = styled.div`
    color: navy;
    text-align: center;
`

export default App;
