import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    &:hover {
      border: 1px solid black;
    }
`

const Image = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
`

const TeamCard = ({ item }) => {
  return (
    <Container>
        <Image src={item.img} />
        <h1>{item.name}</h1>
    </Container>
  )
}

export default TeamCard