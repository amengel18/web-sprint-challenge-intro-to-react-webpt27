import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default function CharacterDetails (props) {
    const {characterId, close} = props
    const [details, setDetails] = useState(null)



    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
          .then(response => {
            setDetails(response.data)
            console.log(response.data)
          })
          .catch(err => console.log(err))
      }, [characterId])


    return (
        <StyledCharacterDetails>
            <h3>Details</h3>
            <p>Gender: {details.gender}</p>
            <p>Height: {details.height}</p>
            <p>Mass: {details.mass}</p>
            <p>Birth Year: {details.birth_year}</p>
            <p>Eye Color: {details.eye_color}</p>
            <p>Hair Color: {details.hair_color}</p>
            <button onClick={close}>Close</button>
        </StyledCharacterDetails>
    )
}

const StyledCharacterDetails = styled.div`
    color: purple;
    text-align: center;
`