import React from 'react'

import { bucksPlayers } from '../../data'
import styled from 'styled-components'
import BucksCard from './BucksCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const BucksList = () => {
  return (
    <Container>
        {bucksPlayers.map((item) => (
            <BucksCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default BucksList