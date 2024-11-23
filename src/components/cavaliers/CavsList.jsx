import React from 'react'

import { cavaliersPlayers } from '../../data'
import styled from 'styled-components'
import CavsCard from './CavsCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const CavsList = () => {
  return (
    <Container>
        {cavaliersPlayers.map((item) => (
            <CavsCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default CavsList