import React from 'react'

import { knicksPlayers } from '../../data'
import styled from 'styled-components'
import KnicksCard from './KnicksCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const KnicksList = () => {
  return (
    <Container>
        {knicksPlayers.map((item) => (
            <KnicksCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default KnicksList