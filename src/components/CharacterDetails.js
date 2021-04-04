import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default function CharacterDetails ({details, close}) {
    
    



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