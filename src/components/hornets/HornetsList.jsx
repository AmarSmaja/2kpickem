import React from 'react'

import { hornetsPlayers } from '../../data'
import styled from 'styled-components'
import HornetCard from './HornetCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const HornetList = () => {
  return (
    <Container>
        {hornetsPlayers.map((item) => (
            <HornetCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default HornetList