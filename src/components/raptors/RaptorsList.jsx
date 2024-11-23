import React from 'react'

import { raptorsPlayers } from '../../data'
import styled from 'styled-components'
import RaptorsCard from './RaptorsCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const RaptorsList = () => {
  return (
    <Container>
        {raptorsPlayers.map((item) => (
            <RaptorsCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default RaptorsList