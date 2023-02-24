import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    width: 25%;
    height: 40vh;
`

const Image = styled.img`
    width: 90%;
    height: 90%;
    object-fit: contain;
`

const PlayerCard = ({ item }) => {
  return (
    <Container>
        <Image src={item.img} />
        <h1>{item.name}</h1>
    </Container>
  )
}

export default PlayerCard