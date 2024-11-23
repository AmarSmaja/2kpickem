import React from 'react'

import { phillyPlayers } from '../../data'
import styled from 'styled-components'
import PhillyCard from './PhillyCard'

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 15px;
`

const PhillyList = () => {
  return (
    <Container>
        {phillyPlayers.map((item) => (
            <PhillyCard item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default PhillyList