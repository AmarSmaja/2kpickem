import React from 'react'

import { pacersPlayers } from '../../data'
import styled from 'styled-components'
import PacersCard from './PacersCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const PacersList = () => {
  return (
    <Container>
        {pacersPlayers.map((item) => (
            <PacersCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default PacersList