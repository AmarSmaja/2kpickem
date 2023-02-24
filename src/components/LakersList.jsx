import React from 'react'

import { lakersPlayers } from '../data'
import styled from 'styled-components'
import LakersCard from './LakersCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const LakersList = () => {
  return (
    <Container>
        {lakersPlayers.map((item) => (
            <LakersCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default LakersList