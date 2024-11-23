import React from 'react'

import { celticsPlayers } from '../../data'
import styled from 'styled-components'
import CelticsCard from './CelticsCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const CelticsList = () => {
  return (
    <Container>
        {celticsPlayers.map((item) => (
            <CelticsCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default CelticsList