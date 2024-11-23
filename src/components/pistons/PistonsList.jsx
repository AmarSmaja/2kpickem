import React from 'react'

import { pistonsPlayers } from '../../data'
import styled from 'styled-components'
import PistonsCard from './PistonsCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const PistonsList = () => {
  return (
    <Container>
        {pistonsPlayers.map((item) => (
            <PistonsCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default PistonsList