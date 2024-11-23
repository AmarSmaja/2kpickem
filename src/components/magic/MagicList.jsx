import React from 'react'

import { magicPlayers } from '../../data'
import styled from 'styled-components'
import MagicCard from './MagicCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const MagicList = () => {
  return (
    <Container>
        {magicPlayers.map((item) => (
            <MagicCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default MagicList