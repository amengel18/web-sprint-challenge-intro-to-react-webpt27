// Write your Character component here
import React from 'react'
import styled from 'styled-components'


export default function Character ({characters, action}) {
    


    return (
        <StyledCharacterDiv>
            <h2>{characters.name}</h2>
            <button onClick={() => action(characters.id)}>
                About Me
            </button>
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