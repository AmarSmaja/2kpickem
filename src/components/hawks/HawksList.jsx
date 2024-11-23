import React from 'react'

import { hawksPlayers } from '../../data'
import styled from 'styled-components'
import HawksCard from './HawksCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const HawksList = () => {
  return (
    <Container>
        {hawksPlayers.map((item) => (
            <HawksCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default HawksList