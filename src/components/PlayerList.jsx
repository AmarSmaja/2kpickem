import React from 'react'

import styled from 'styled-components'
import { players } from '../data'
import PlayerCard from './PlayerCard'

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Players = () => {
  return (
    <Container>
        {players.map((item) => (
            <PlayerCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Players