// Write your Character component here
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CharacterDetails from './CharacterDetails'
import axios from 'axios'


export default function Character () {
    
    
    const [details, setDetails] = useState([])



    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
          .then(response => {
            setDetails(response.data)
            console.log(response.data)
          })
          .catch(err => console.log(err))
      }, [])

    return (
        <StyledCharacterDiv>
              {
                  details.map(character => {
                      return <CharacterDetails character={character} key={character.id}/>
                  })
              }
        </StyledCharacterDiv>
    )
} 

const StyledCharacterDiv = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: gray;
        transition: 0.5s ease-in-out;
    }
    transition: 0.5s ease-in-out;

    button {
        color: purple;
    }
`