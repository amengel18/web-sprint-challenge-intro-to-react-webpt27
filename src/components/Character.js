// Write your Character component here
import React from 'react'
import styled from 'styled-components'


export default function Character (props) {
    
const { character } = props

    return (
        <StyledCharacterDiv>
            <h3>{character.name}</h3>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
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