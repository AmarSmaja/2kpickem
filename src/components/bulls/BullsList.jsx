import React from 'react'

import { bullsPlayers } from '../../data'
import styled from 'styled-components'
import BullsCard from './BullsCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const BullsList = () => {
  return (
    <Container>
        {bullsPlayers.map((item) => (
            <BullsCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default BullsList