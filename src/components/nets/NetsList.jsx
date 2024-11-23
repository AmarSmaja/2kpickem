import React from 'react'

import { netsPlayers } from '../../data'
import styled from 'styled-components'
import NetsCard from './NetsCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const NetsList = () => {
  return (
    <Container>
        {netsPlayers.map((item) => (
            <NetsCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default NetsList